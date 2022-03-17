import React from "react"
import DateRangeIcon from "@mui/icons-material/DateRange"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { memo } from "react"
import MediaQuery from "react-responsive"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import _ from "lodash"

import {
  BaseButton,
  Layout,
  Seo,
  ShareButtons,
  Toc,
} from "./../components/components"
import {
  post_show_wrapper,
  post_show_title,
  post_show_calender_wrapper,
  post_show_calender_string,
  post_show_tag_wrapper,
} from "./../../css/components/post_show.module.css"
import { post_show_tag_button } from "./../../css/components/button.module.css"
import { post_show_calender_icon } from "./../../css/components/icon.module.css"
import { contents_wrapper } from "./../../css/components/contents.module.css"

const BlogPostTemplate = memo(({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.mdx.frontmatter.title
  const ogTitle = data.site.siteMetadata.title
  const description = data.mdx.frontmatter.description
  const siteUrl = data.site.siteMetadata.siteUrl
  const BlogPostUrl = `${siteUrl}/${post.slug}`
  const TwitterImageUrl = `${data.mdx.frontmatter.image_url}`
  const FBImageUrl = `${data.mdx.frontmatter.image_url}`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={siteTitle}
        page_url={BlogPostUrl}
        twitterImageUrl={TwitterImageUrl}
        fbImageUrl={FBImageUrl}
        description={description}
        ogTitle={ogTitle}
      />
      <ContentsWrapper className={contents_wrapper}>
        <PostShowWrapper className={post_show_wrapper}>
          <ShareButtons
            url={BlogPostUrl}
            title={`${siteTitle}\n`}
            size={32}
            words={`Share this Article!`}
          />
          <p className={post_show_title}>{post.frontmatter.title}</p>
          <MediaQuery query="(max-width: 430px)">
            <p style={{ marginTop: "10px" }}>
              {post.frontmatter.tags &&
                post.frontmatter.tags.map((tag, index) => {
                  return (
                    <Link to={`/tags/${_.kebabCase(tag)}/`} key={index}>
                      <BaseButton
                        word={`#${tag}`}
                        base_button_style={post_show_tag_button}
                      />
                    </Link>
                  )
                })}
            </p>
          </MediaQuery>
          <p className={post_show_calender_wrapper}>
            <DateRangeIcon
              className={post_show_calender_icon}
              sx={{ fontSize: 28 }}
            />
            <span className={post_show_calender_string}>
              {post.frontmatter.date}
            </span>
            <span className={post_show_tag_wrapper}>
              {post.frontmatter.tags &&
                post.frontmatter.tags.map((tag, index) => {
                  return (
                    <Link to={`/tags/${_.kebabCase(tag)}/`} key={index}>
                      <BaseButton
                        word={`#${tag}`}
                        base_button_style={post_show_tag_button}
                      />
                    </Link>
                  )
                })}
            </span>
          </p>
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </PostShowWrapper>
        <CardsWrapper>
          <Toc tableOfContents={post.tableOfContents} />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
})

export default BlogPostTemplate

const PostShowWrapper = styled.div``

const CardsWrapper = styled.div``

const ContentsWrapper = styled.div``

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
  }
`
