import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "gatsby"

import { article_card } from "./../../../css/components/card.module.css"

const ArticleCard = ({ children, title, url }) => {
  return (
    <Card sx={{ width: "60%" }} className={article_card}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ArticleCard
