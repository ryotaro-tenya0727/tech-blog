import React from "react"
import styled from "styled-components"
import LinkIcon from "@mui/icons-material/Link"

import {
  bio_card,
  bio_line,
  bio_image_wrapper,
  bio_name,
  bio_image,
  bio_name_tw_wrapper,
  bio_follow_string,
  bio_service,
} from "./../../../css/components/bio.module.css"
import { BioIcons } from "./../components"

const Bio = ({ bio_wrapper }) => {
  const imageDomain = process.env.REACT_APP_IMAGE_DOMAIN
  return (
    <>
      <div className={bio_wrapper}>
        <hr className={bio_line}></hr>
        <div className={bio_card}>
          <BioImageWrapper className={bio_image_wrapper}>
            <img
              src={`https://d2dshvnpldvez1.cloudfront.net/admin/menu-image.png`}
              width={80}
              placeholder="#fff"
              className={bio_image}
              loading="eager"
              durationFadeIn={100}
              alt="bio_image"
            />
            <div className={bio_name_tw_wrapper}>
              <p className={bio_name}>
                <a href="https://twitter.com/naka_ryo_z" target="_blank">
                  @naka_ryo_z
                </a>
              </p>
            </div>
          </BioImageWrapper>

          <p className={bio_follow_string}>ｆｏｌｌｏｗ ｍｅ！</p>
          <BioIcons />
          <p className={bio_service}>
            <LinkIcon
              sx={{
                fontSize: "22px",
                mb: -0.8,
                mr: 0.7,
              }}
            />
            <a href="https://www.oshi-diary.com/" target="_blank">
              https://www.oshi-diary.com
            </a>
          </p>
        </div>

        <hr className={bio_line}></hr>
      </div>
    </>
  )
}

const BioImageWrapper = styled.div``
export default Bio
