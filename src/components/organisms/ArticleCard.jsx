import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Link } from "gatsby"
import DateRangeIcon from "@mui/icons-material/DateRange"
import styled from "styled-components"

import {
  article_card,
  article_card_box,
  article_image,
  article_title,
  article_description,
  article_date,
} from "./../../../css/components/card.module.css"

import { calender_icon } from "./../../../css/components/icon.module.css"

const ArticleCard = ({ children, title, url, image_url, description }) => {
  return (
    <Card className={article_card_box}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <CardContent className={article_card}>
          <img alt="test" src={image_url} className={article_image} />
          <ArticleText>
            <p className={article_title}>{title} </p>
            <p className={article_description}>{description}</p>

            <p className={article_date}>
              <DateRangeIcon className={calender_icon} />
              &emsp;&ensp; {children}
            </p>
          </ArticleText>
        </CardContent>
      </Link>
    </Card>
  )
}

const ArticleText = styled.div`
  margin-left: 27px;
`

export default ArticleCard
