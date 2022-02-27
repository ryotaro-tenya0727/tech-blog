import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { ArticleCard } from "./../components/components"
import { top_title } from "./../../css/components/string.module.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <h3 className={top_title}>最近の記事</h3>
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

export default BlogIndex

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
