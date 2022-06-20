import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
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
  const imageDomain = process.env.REACT_APP_IMAGE_DOMAIN
  const BioImagePath = `${imageDomain}/admin/menu-image.png`
  console.log(BioImagePath)
  return (
    <Card className={bio_wrapper}>
      <CardContent className={bio_card}>
        <BioImageWrapper className={bio_image_wrapper}>
          <img
            src={`${process.env.REACT_APP_IMAGE_DOMAIN}/admin/menu-image.png`}
            width={140}
            height={140}
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
