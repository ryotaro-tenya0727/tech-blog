import React from "react"
import { graphql } from "gatsby"
import { memo } from "react"
import styled from "styled-components"

import {
  ArticleCard,
  Bio,
  Category,
  Layout,
  Seo,
  ShareButtons,
} from "./../components/components"

import { article_wrapper } from "./../../css/components/card.module.css"
import { bio_tag_page_wrapper } from "./../../css/components/bio.module.css"
import { top_tag_title } from "./../../css/components/string.module.css"
import { category_wrapper } from "./../../css/components/category.module.css"
import { contents_wrapper } from "./../../css/components/contents.module.css"

const Tags = memo(({ pageContext, data, location }) => {
  const posts = data.allMdx.nodes
  const tags = data.tags.group
  const siteTitle = data.site.siteMetadata.title
  const ogTitle = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const siteUrl = `${data.site.siteMetadata.siteUrl}`
  const TwitterImageUrl = `https://user-images.githubusercontent.com/71915489/156100268-d8076f76-ba09-4b84-87d3-6df2296ec384.jpg`
  const FBImageUrl = `https://user-images.githubusercontent.com/71915489/156100268-d8076f76-ba09-4b84-87d3-6df2296ec384.jpg`

  return (
    <Layout location={location}>
      <Seo
        title={siteTitle}
        page_url={siteUrl}
        twitterImageUrl={TwitterImageUrl}
        fbImageUrl={FBImageUrl}
        description={description}
        ogTitle={ogTitle}
      />
      <ShareButtons
        url={siteUrl}
        title={`${siteTitle}`}
        size={36}
        words={`Share this Blog!`}
      />
      <p className={top_tag_title}>
        {pageContext.tag}のタグがついた記事({data.allMdx.totalCount}件)
      </p>
      <ContentsWrapper className={contents_wrapper}>
        <ArticlesWrapper className={article_wrapper}>
          {posts.map((post, index) => {
            return (
              <ArticleCard
                key={index}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                url={post.fields.slug}
                image_url={post.frontmatter.image_url}
                tags={post.frontmatter.tags}
                date={post.frontmatter.date}
              />
            )
          })}
        </ArticlesWrapper>
        <CardsWrapper>
          <Bio bio_wrapper={bio_tag_page_wrapper} />
          <Category tags={tags} category_wrapper={category_wrapper} />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
})

export default Tags

const ArticlesWrapper = styled.div``
const CardsWrapper = styled.div``

const ContentsWrapper = styled.div``

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
        totalCount
      }
    }
  }
`
