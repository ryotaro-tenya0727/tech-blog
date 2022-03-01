import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "./../components/seo"
import { ArticleCard } from "./../components/components"
import { top_title } from "./../../css/components/string.module.css"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title || `Title`
  const siteURL = data.site.siteMetadata.siteUrl
  const image_url = `./../images/indexogp.jpg`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <Seo title={siteTitle} page_url={siteURL} image_url={image_url} />
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
        <Link to={pageContext.previousPagePath}>前の2件</Link>
        <Link to={pageContext.nextPagePath}>次の2件</Link>
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query ($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
