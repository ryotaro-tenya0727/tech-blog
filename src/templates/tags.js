import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ArticleCard } from "./../components/components"

const Tags = ({ pageContext, data, location }) => {
  return (
    <Layout location={location}>
      <h1>
        {pageContext.tag}({data.allMdx.totalCount}件)
      </h1>
      {data.allMdx.nodes.map(node => {
        return (
          <ArticleCard
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            url={node.fields.slug}
            image_url={node.frontmatter.image_url}
            tags={node.frontmatter.tags}
            date={node.frontmatter.date}
          />
        )
      })}
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date(formatString: "YYYY年 MM月 DD日")
          description
          image_url
        }
      }
      totalCount
    }
  }
`
