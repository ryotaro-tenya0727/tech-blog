import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
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
          <img
            alt="bio"
            src="https://user-images.githubusercontent.com/71915489/160359100-85a1ed1b-9657-471c-8fde-e45e04de61d4.png"
            className={bio_image}
            placeholder="#fff"
            width={150}
            height={150}
          />
        </BioImageWrapper>
        <BioIcons />
        <p className={bio_name}>著者　中山遼太郎</p>
        <p className={bio_email_wrapper}>
          <MailIcon sx={{ color: pink[`500`], fontSize: 20 }} />
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
