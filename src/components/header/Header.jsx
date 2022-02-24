import * as React from "react"
import styled from "styled-components"
import { BaseButton } from "./../components"
import { StaticImage } from "gatsby-plugin-image"
import useMedia from "use-media"

const Header = () => {
  const IsWide = useMedia({ minWidth: "750px" })
  const HeaderWords = ["トップ", "記事一覧", "著者について"]
  return (
    <div>
      <SHeader>
        <StaticImage
          src="./../../images/logo.png"
          width={250}
          height={60}
          placeholder="#fff"
        />
        {IsWide ? (
          <SButtons>
            {HeaderWords.map((word, index) => {
              return <BaseButton key={index} word={word} />
            })}
          </SButtons>
        ) : (
          "a"
        )}
      </SHeader>
    </div>
  )
}

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
