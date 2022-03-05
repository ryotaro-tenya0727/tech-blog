import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "./../components/seo"
import {
  ArticleCard,
  ShareButtons,
  Paginations,
  Bio,
} from "./../components/components"
import { top_title } from "./../../css/components/string.module.css"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const twitterImageUrl = `https://user-images.githubusercontent.com/71915489/156093388-f27e4c26-56ab-4456-ad64-648afee8316d.jpg`
  const fbImageUrl = `https://user-images.githubusercontent.com/71915489/156100268-d8076f76-ba09-4b84-87d3-6df2296ec384.jpg`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <Seo
        title={siteTitle}
        page_url={siteUrl}
        twitterImageUrl={twitterImageUrl}
        fbImageUrl={fbImageUrl}
      />

      <ShareButtons
        url={siteUrl}
        title={`${siteTitle}\nこのブログの著者を応援！\n`}
        size={36}
      />
      <Paginations pageContext={pageContext} />
      <h2 className={top_title}>最近の記事</h2>
      <ContentsWrapper>
        <ArticlesWrapper style={{ listStyle: `none`, flex: 7 }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <ArticleCard
                title={title}
                url={post.fields.slug}
                image_url={post.frontmatter.image_url}
                description={post.frontmatter.description}
                key={post.fields.slug}
              >
                {post.frontmatter.date}
              </ArticleCard>
            )
          })}
        </ArticlesWrapper>
        <CardsWrapper>
          <Bio />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
}

export default BlogIndex

const ArticlesWrapper = styled.div``
const CardsWrapper = styled.div`
  flex: 3;
`

const ContentsWrapper = styled.div`
  @media (min-width: 1020px) {
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
        }
      }
    }
  }
`
