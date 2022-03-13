import React from "react"
import { graphql } from "gatsby"
import { memo } from "react"
import styled from "styled-components"

import {
  ArticleCard,
  Bio,
  Category,
  Layout,
  Paginations,
  Seo,
  ShareButtons,
} from "./../components/components"
import { top_title } from "./../../css/components/string.module.css"
import { article_wrapper } from "./../../css/components/card.module.css"
import { bio_wrapper } from "./../../css/components/bio.module.css"
import { category_wrapper } from "./../../css/components/category.module.css"

const BlogIndex = memo(({ data, location, pageContext }) => {
  const posts = data.allMdx.nodes
  const tags = data.allMdx.group
  const siteTitle = data.site.siteMetadata.title
  const ogTitle = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const siteUrl = `${data.site.siteMetadata.siteUrl}`
  const twitterImageUrl = `https://user-images.githubusercontent.com/71915489/156093388-f27e4c26-56ab-4456-ad64-648afee8316d.jpg`
  const fbImageUrl = `https://user-images.githubusercontent.com/71915489/156100268-d8076f76-ba09-4b84-87d3-6df2296ec384.jpg`

  return (
    <Layout location={location}>
      <Seo
        title={siteTitle}
        page_url={siteUrl}
        twitterImageUrl={twitterImageUrl}
        fbImageUrl={fbImageUrl}
        description={description}
        ogTitle={ogTitle}
      />
      <ShareButtons
        url={siteUrl}
        title={`${siteTitle}`}
        size={36}
        words={`Share this Blog!`}
      />
      <Paginations pageContext={pageContext} />
      <h2 className={top_title}>最近の記事</h2>
      <ContentsWrapper>
        <ArticlesWrapper className={article_wrapper}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <ArticleCard
                title={title}
                url={post.fields.slug}
                image_url={post.frontmatter.image_url}
                description={post.frontmatter.description}
                key={post.fields.slug}
                tags={post.frontmatter.tags}
                date={post.frontmatter.date}
              />
            )
          })}
        </ArticlesWrapper>
        <CardsWrapper>
          <Bio bio_wrapper={bio_wrapper} />
          <Category tags={tags} category_wrapper={category_wrapper} />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
})

export default BlogIndex

const ArticlesWrapper = styled.div``
const CardsWrapper = styled.div`
  flex: 2;
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
  query ($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
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
          date(formatString: "YYYY年 MM月 DD日")
          title
          description
          image_url
          tags
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
