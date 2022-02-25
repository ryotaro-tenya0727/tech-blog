import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import useMedia from "use-media"
import { memo } from "react"
import { Link } from "gatsby"
import MenuIcon from "@mui/icons-material/Menu"

import { BaseButton } from "./../components"

const Header = memo(({ onClickOpen }) => {
  const isWide = useMedia({ minWidth: "750px" })
  const HeaderWords = ["トップ", "記事一覧", "著者について"]
  return (
    <div>
      <SHeader>
        <Link to="/">
          <StaticImage
            src="./../../images/logo.png"
            width={250}
            height={60}
            placeholder="#fff"
          />
        </Link>
        {isWide ? (
          <SButtons>
            {HeaderWords.map((word, index) => {
              return <BaseButton key={index} word={word} />
            })}
          </SButtons>
        ) : (
          <MenuIcon
            onClick={onClickOpen}
            sx={{ fontSize: 50, mr: 5, mt: 0.3 }}
          />
        )}
      </SHeader>
    </div>
  )
})

const SHeader = styled.header`
  background-color: #fff;
  max-width: 80%;
  margin 0 auto;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;

`
const SButtons = styled.div`
  margin-top: 11px;
`

export default Header
