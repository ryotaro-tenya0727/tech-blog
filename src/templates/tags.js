import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import _ from "lodash"

import Seo from "./../components/seo"
import {
  ArticleCard,
  ShareButtons,
  Bio,
  Category,
} from "./../components/components"

import { article_wrapper } from "./../../css/components/card.module.css"
import { bio_tag_page_wrapper } from "./../../css/components/bio.module.css"
import { top_tag_title } from "./../../css/components/string.module.css"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const TagsUrl = `${siteUrl}/tags/${_.kebabCase(pageContext.tag)}/`
  const TwitterImageUrl = `https://user-images.githubusercontent.com/71915489/156093388-f27e4c26-56ab-4456-ad64-648afee8316d.jpg`
  const FBImageUrl = `https://user-images.githubusercontent.com/71915489/156100268-d8076f76-ba09-4b84-87d3-6df2296ec384.jpg`
  const description = data.site.siteMetadata.description
  const tags = data.tags.group

  return (
    <Layout location={location}>
      <Seo
        title={siteTitle}
        page_url={TagsUrl}
        twitterImageUrl={TwitterImageUrl}
        fbImageUrl={FBImageUrl}
        description={description}
      />
      <ShareButtons
        url={TagsUrl}
        title={`${siteTitle}`}
        size={36}
        words={`Share this Blog!`}
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

const ArticlesWrapper = styled.div``
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
        description
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
