import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Link } from "gatsby"
import DateRangeIcon from "@mui/icons-material/DateRange"
import styled from "styled-components"
import _ from "lodash"
import MediaQuery from "react-responsive"

import { CardTagButton } from "./../components"

import {
  article_card,
  article_card_box,
  article_image,
  article_title,
  article_description,
  article_date,
  article_tags_wrapper,
} from "./../../../css/components/card.module.css"

import { calender_icon } from "./../../../css/components/icon.module.css"

const ArticleCard = ({ tags, title, date, url, image_url, description }) => {
  return (
    <Card className={article_card_box}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <CardContent className={article_card}>
          <img
            alt="test"
            src={image_url}
            className={article_image}
            placeholder="#fff"
          />
          <ArticleText>
            <p className={article_title}>{title} </p>
            <p className={article_description}>{description}</p>
            <ArticleTagsWrapper className={article_tags_wrapper}>
              {tags &&
                tags.map(tag => {
                  return (
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>
                      <CardTagButton word={`#${tag}`} />
                    </Link>
                  )
                })}
            </ArticleTagsWrapper>
            <MediaQuery query="(min-width: 430.1px)">
              <p className={article_date}>
                <DateRangeIcon className={calender_icon} />
                &emsp;&ensp; {date}
              </p>
            </MediaQuery>
          </ArticleText>
          <MediaQuery query="(max-width: 430px)">
            <p className={article_date}>
              <DateRangeIcon className={calender_icon} />
              &emsp;&ensp; {date}
            </p>
          </MediaQuery>
        </CardContent>
      </Link>
    </Card>
  )
}

const ArticleText = styled.div`
  margin-left: 20px;
`

const ArticleTagsWrapper = styled.div``

export default ArticleCard
