import React from "react"
import ArticleIcon from "@mui/icons-material/Article"
import GitHubIcon from "@mui/icons-material/GitHub"
import { green } from "@mui/material/colors"
import { Link } from "gatsby"
import styled from "styled-components"
import TwitterIcon from "@mui/icons-material/Twitter"

import {
  bio_icons_wrapper,
  bio_icon,
} from "./../../../css/components/icon.module.css"
const BioIcons = () => {
  return (
    <BioIconsWrapper className={bio_icons_wrapper}>
      <Link
        to={`https://twitter.com/naka_ryo_z`}
        className={bio_icon}
        target={`_blank`}
      >
        <TwitterIcon color="primary" />
      </Link>
      <Link
        to={`https://github.com/ryotaro-tenya0727`}
        className={bio_icon}
        target={`_blank`}
      >
        <GitHubIcon />
      </Link>
      <Link
        to={`https://qiita.com/nakayama_ryotaro`}
        className={bio_icon}
        target={`_blank`}
      >
        <ArticleIcon sx={{ color: green[500] }} />
      </Link>
    </BioIconsWrapper>
  )
}

const BioIconsWrapper = styled.div``

export default BioIcons
