import React from "react"
import { graphql } from "gatsby"
import { memo } from "react"
import { pink } from "@mui/material/colors"
import styled from "styled-components"
import SavedSearchIcon from "@mui/icons-material/SavedSearch"
import { useState } from "react"

import {
  ArticleCard,
  Bio,
  Category,
  Layout,
  ShareButtons,
} from "./../components/components"
import { article_wrapper } from "./../../css/components/card.module.css"
import { bio_post_page_wrapper } from "./../../css/components/bio.module.css"
import { top_posts_title } from "./../../css/components/string.module.css"
import { search_form } from "./../../css/components/search_form.module.css"
import { search_icon } from "./../../css/components/icon.module.css"
import { posts_category_wrapper } from "./../../css/components/category.module.css"
import { contents_wrapper } from "./../../css/components/contents.module.css"

const BlogPostsIndex = memo(({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  const allPosts = data.allMdx.nodes
  const tags = data.tags.group

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  //検索結果をpostに格納
  const posts = hasSearchResults ? filteredData : allPosts

  const handleInputChange = event => {
    const query = event.target.value
    const posts = data.allMdx.nodes || []
    const filteredData = posts.filter(post => {
      const { description, title } = post.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <ShareButtons
        url={siteUrl}
        title={`${siteTitle}`}
        size={32}
        words={`Share this Blog!`}
      />
      <p className={top_posts_title}>記事一覧</p>
      <p>
        <input
          type="text"
          aria-label="Search"
          placeholder="タイトル、記事説明で検索..."
          onChange={handleInputChange}
          className={search_form}
        />
        <SavedSearchIcon
          className={search_icon}
          sx={{ fontSize: 40, color: pink[700] }}
        />
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
          <Bio bio_wrapper={bio_post_page_wrapper} />
          <Category tags={tags} category_wrapper={posts_category_wrapper} />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
})

export default BlogPostsIndex

const ArticlesWrapper = styled.div``
const CardsWrapper = styled.div``
const ContentsWrapper = styled.div``

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
