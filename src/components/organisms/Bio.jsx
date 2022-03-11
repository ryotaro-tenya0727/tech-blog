import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import MailIcon from "@mui/icons-material/Mail"
import { pink } from "@mui/material/colors"

import {
  bio_card,
  bio_image_wrapper,
  bio_name,
  bio_image,
  bio_description,
  bio_email_wrapper,
} from "./../../../css/components/bio.module.css"
import { BioIcons } from "./../components"

const Bio = ({ bio_wrapper }) => {
  return (
    <Card className={bio_wrapper}>
      <CardContent className={bio_card}>
        <BioImageWrapper className={bio_image_wrapper}>
          <StaticImage
            src="./../../images/newbio.png"
            width={150}
            height={150}
            placeholder="#fff"
            className={bio_image}
            loading="eager"
            durationFadeIn={100}
          />
        </BioImageWrapper>
        <BioIcons />

        <p className={bio_name}>著者　中山遼太郎</p>
        <p className={bio_email_wrapper}>
          <MailIcon sx={{ color: pink[`500`] }} />
          <a href="mailto:ryotaro123110@gmail.com" target={`_blank`}>
            ryotaro123110@gmail.com
          </a>
        </p>
        <p className={bio_description}>
          エンジニアを目指してプログラミングスクールで学習中です。主にRails
          Reactを学びながら競技プログラミングにも参加しています。
        </p>
      </CardContent>
    </Card>
  )
}

const BioImageWrapper = styled.div``
export default Bio
