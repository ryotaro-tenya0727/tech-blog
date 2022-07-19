import React from "react"
import { Link } from "gatsby"
import { memo } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import MediaQuery from "react-responsive"
import styled from "styled-components"

import { BaseButton } from "./../components"
import { menu_icon_button } from "./../../../css/components/icon.module.css"
import { header_button } from "./../../../css/components/button.module.css"

const Header = memo(({ onClickOpen }) => {
  const HeaderWords = ["トップ", "記事一覧", "ブログについて"]
  const HeaderRoots = ["/", "/posts", "/about"]

  return (
    <SHeader>
      <Link to="/">
        <img
          src={`https://d2dshvnpldvez1.cloudfront.net/admin/logo_new.png`}
          height={60}
          style={{ display: "inline-block" }}
          placeholder="#fff"
          loading="eager"
          durationFadeIn={100}
          alt="top_logo"
        />
      </Link>
      <MediaQuery query="(max-width: 890px)">
        <MenuIcon
          onClick={onClickOpen}
          className={menu_icon_button}
          sx={{ fontSize: 48 }}
        />
      </MediaQuery>
      <SButtons>
        {HeaderWords.map((header_word, index) => {
          return (
            <Link to={HeaderRoots[index]} key={index}>
              <BaseButton
                word={header_word}
                base_button_style={header_button}
              />
            </Link>
          )
        })}
      </SButtons>
    </SHeader>
  )
})

const SHeader = styled.header`
  background-color: #fff5fd;
  width: 90%;
  margin 0 auto;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;

`
const SButtons = styled.div`
  margin-top: 11px;
  @media (max-width: 890px) {
    display: none;
  }
`

export default Header
