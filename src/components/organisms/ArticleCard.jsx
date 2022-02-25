import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "gatsby"
import DateRangeIcon from "@mui/icons-material/DateRange"

import {
  article_card,
  article_card_box,
} from "./../../../css/components/card.module.css"

import { calender_icon } from "./../../../css/components/icon.module.css"

const ArticleCard = ({ children, title, url }) => {
  return (
    <Card
      sx={{ width: "60%" }}
      className={article_card_box}
      style={{ position: "relative" }}
    >
      <Link to={url} style={{ textDecoration: "none" }}>
        <CardContent className={article_card}>
          <Typography>{title}</Typography>
          <Typography>
            {" "}
            <DateRangeIcon className={calender_icon} /> {children}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ArticleCard
