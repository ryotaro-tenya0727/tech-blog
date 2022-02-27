import * as React from "react"
import { graphql } from "gatsby"
import { useState } from "react"

import Layout from "../components/layout"
import { ArticleCard } from "./../components/components"
import { top_title } from "./../../css/components/string.module.css"

const BlogPostsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  const allPosts = data.allMdx.nodes

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  //検索結果をpostに格納
  const posts = hasSearchResults ? filteredData : allPosts

  const handleInputChange = event => {
    const query = event.target.value
    const posts = data.allMdx.nodes || []
    console.log(posts)
    const filteredData = posts.filter(post => {
      const { description, title } = post.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{}</h1>
      <h3 className={top_title}>
        <input
          type="text"
          aria-label="Search"
          placeholder="検索ワードを入力..."
          onChange={handleInputChange}
        />
      </h3>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <ArticleCard
                title={title}
                url={post.fields.slug}
                image_url={post.frontmatter.image_url}
              >
                {post.frontmatter.date}
              </ArticleCard>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPostsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image_url
        }
      }
    }
  }
`
