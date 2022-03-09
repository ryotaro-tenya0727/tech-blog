/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  description,
  page_url,
  twitterImageUrl,
  fbImageUrl,
  lang,
  meta,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      description={description}
      meta={[
        {
          property: `fb:app_id`,
          content: `298773962351651`,
        },
        {
          property: `og:url`,
          content: `${page_url}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: `${title}`,
        },
        {
          property: `og:description`,
          content: `${description}`,
        },

        {
          property: `og:site_name`,
          content: `寝ても覚めてもプログラミングワールド、夢中にさせちゃうぞ！`,
        },
        {
          property: `og:image`,
          content: `${fbImageUrl}`,
        },

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `${site.siteMetadata.social.twitter}`,
        },
        {
          name: `twitter:domain`,
          content: `otaku-programmer.com`,
        },

        {
          name: `twitter:title`,
          content: `${title}`,
        },
        {
          name: `twitter:image`,
          content: `${twitterImageUrl}`,
        },
        {
          name: `twitter:description`,
          content: `${description}`,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
