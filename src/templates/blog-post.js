import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CodeBlock from "../components/codeblock"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.mdx.frontmatter.title || `Title`
  const components = {
    h1: props => {
      console.log(props)
      return <h1 style={{ color: "tomato" }} {...props} />
    },
    pre: preProps => {
      return <pre style={{ color: "tomato" }} {...preProps} />
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
