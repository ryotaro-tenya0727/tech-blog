import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "@mui/material/Typography"
import {
  bio_wrapper,
  bio_image,
} from "./../../../css/components/bio.module.css"

const Bio = () => {
  return (
    <Card className={bio_wrapper}>
      <StaticImage
        src="./../../images/newbio.png"
        className={bio_image}
        width={150}
        height={150}
        placeholder="#fff"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {author} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          エンジニアを目指してプログラミングスクールで学習中です。 主に、Rails
          Reactを学びながら、競技プログラミングにも参加しています。
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Bio
