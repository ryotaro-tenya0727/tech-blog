import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import {
  ArticleCard,
  ShareButtons,
  Bio,
  Category,
} from "./../components/components"

import { article_wrapper } from "./../../css/components/string.module.css"
import { bio_tag_page_wrapper } from "./../../css/components/bio.module.css"
import { top_tag_title } from "./../../css/components/string.module.css"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const tags = data.tags.group
  return (
    <Layout location={location}>
      <ShareButtons
        url={siteUrl}
        title={`${siteTitle}\nこのブログの著者を応援！\n`}
        size={36}
      />
      <p className={top_tag_title}>
        {pageContext.tag}のタグがついた記事({data.allMdx.totalCount}件)
      </p>
      <ContentsWrapper>
        <ArticlesWrapper className={article_wrapper}>
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
        </ArticlesWrapper>
        <CardsWrapper>
          <Bio bio_wrapper={bio_tag_page_wrapper} />
          <Category tags={tags} />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
}

export default Tags

const ArticlesWrapper = styled.div`
  flex: 7;
`
const CardsWrapper = styled.div`
  flex: 2;
  display: inline-block;
`

const ContentsWrapper = styled.div`
  @media (min-width: 980px) {
     {
      display: flex;
      justify-content: space-between;
    }
  }
`

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
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
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
