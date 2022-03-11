import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import DateRangeIcon from "@mui/icons-material/DateRange"
import { Link } from "gatsby"
import _ from "lodash"
import MediaQuery from "react-responsive"
import { memo } from "react"

import Seo from "./../components/seo"
import {
  ShareButtons,
  Toc,
  PostShowTagButton,
} from "./../components/components"
import Layout from "../components/layout"
import {
  post_show_wrapper,
  post_show_title,
  post_show_calender_wrapper,
  post_show_calender_icon,
  post_show_calender_string,
  post_show_tag_wrapper,
} from "./../../css/components/post_show.module.css"

const BlogPostTemplate = memo(({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.mdx.frontmatter.title
  const ogTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const BlogPostUrl = `${siteUrl}/${post.slug}`
  const description = data.mdx.frontmatter.description
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
      <ContentsWrapper>
        <PostShowWrapper className={post_show_wrapper}>
          <ShareButtons
            url={BlogPostUrl}
            title={`${siteTitle}\n`}
            size={36}
            words={`Share this Article!`}
          />
          <p className={post_show_title}>{post.frontmatter.title}</p>
          <MediaQuery query="(max-width: 430px)">
            <p style={{ marginTop: "10px" }}>
              {post.frontmatter.tags &&
                post.frontmatter.tags.map(tag => {
                  return (
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>
                      <PostShowTagButton word={`#${tag}`} />
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
                post.frontmatter.tags.map(tag => {
                  return (
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>
                      <PostShowTagButton word={`#${tag}`} />
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

const PostShowWrapper = styled.div`
  flex: 7;
`

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
