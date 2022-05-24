import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import {
  bio_card,
  bio_image_wrapper,
  bio_name,
  bio_image,
  bio_description,
  bio_follow_string,
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
            alt="bio_image"
          />
        </BioImageWrapper>
        <p className={bio_name}>著者　中山遼太郎</p>
        <p className={bio_follow_string}>ｆｏｌｌｏｗ ｍｅ！</p>
        <BioIcons />
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
