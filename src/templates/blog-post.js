import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import gatsby_image from "./../images/gatsby-icon.png"

import Seo from "./../components/seo"
import { ShareButtons, Bio, Category } from "./../components/components"
import Layout from "../components/layout"
import {
  post_show_contens_wrapper,
  post_show_wrapper,
  post_show_title,
} from "./../../css/components/post_show.module.css"
import { bio_post_show_wrapper } from "./../../css/components/bio.module.css"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const tags = data.tags.group
  const siteTitle = data.mdx.frontmatter.title
  const ogTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const BlogPostUrl = `${siteUrl}/${post.slug}`
  const description = data.mdx.frontmatter.description
  const TwitterImageUrl = `${siteUrl}${gatsby_image}`
  const FBImageUrl = `${siteUrl}${gatsby_image}`

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
      <ShareButtons
        url={BlogPostUrl}
        title={`${siteTitle}\n`}
        size={36}
        words={`Share this Article!`}
      />
      <ContentsWrapper>
        <PostShowWrapper className={post_show_wrapper}>
          <p className={post_show_title}>{post.frontmatter.title}</p>

          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </PostShowWrapper>
        <CardsWrapper>
          <Bio bio_wrapper={bio_post_show_wrapper} />
          <Category tags={tags} />
        </CardsWrapper>
      </ContentsWrapper>
    </Layout>
  )
}

const PostShowWrapper = styled.div`
  flex: 7;
`

const CardsWrapper = styled.div``

const ContentsWrapper = styled.div`
  @media (min-width: 980px) {
     {
      display: flex;
      justify-content: space-between;
    }
  }
`

export default BlogPostTemplate

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
        date(formatString: "MMMM DD, YYYY")
        description
        image_url
        tags
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
