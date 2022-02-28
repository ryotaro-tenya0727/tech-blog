import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { memo } from "react"
import { Link } from "gatsby"
import MenuIcon from "@mui/icons-material/Menu"
import MediaQuery from "react-responsive"

import { BaseButton } from "./../components"
import { menu_icon_button } from "./../../../css/components/icon.module.css"

const Header = memo(({ onClickOpen }) => {
  const HeaderWords = ["トップ", "記事一覧", "著者について"]
  const HeaderRoots = ["/", "/posts", "/about"]

  return (
    <div>
      <SHeader>
        <Link to="/">
          <StaticImage
            src="https://user-images.githubusercontent.com/71915489/155916380-4656924c-1aa0-4ab2-bc5d-8d9f9e2823d4.png"
            width={250}
            height={60}
            placeholder="#fff"
          />
        </Link>
        <MediaQuery query="(max-width: 800px)">
          <MenuIcon
            onClick={onClickOpen}
            className={menu_icon_button}
            sx={{ fontSize: 48 }}
          />
        </MediaQuery>
        <SButtons>
          {HeaderWords.map((word, index) => {
            return (
              <Link to={HeaderRoots[index]}>
                <BaseButton key={index} word={word} />
              </Link>
            )
          })}
        </SButtons>
      </SHeader>
    </div>
  )
})

const SHeader = styled.header`
  background-color: #fff;
  width: 80%;
  margin 0 auto;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;

`
const SButtons = styled.div`
  margin-top: 11px;
  @media (max-width: 800px) {
    display: none;
  }
`

export default Header
