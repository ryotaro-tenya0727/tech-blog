import * as React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"
const About = ({ location }) => {
  return (
    <Layout location={location}>
      <h2>Coming soon...</h2>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        title
        date(formatString: "YYYY年 MM月 DD日")
        description
        image_url
        tags
      }
      tableOfContents
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
