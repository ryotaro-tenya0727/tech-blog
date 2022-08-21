import React from "react"
import { memo } from "react"
import styled from "styled-components"
import { useState, useCallback } from "react"

import { Header } from "./components"
import { SideMenu } from "./components"

const Layout = memo(({ location, children }) => {
  const [isOpenSideMenu, SetSideMenu] = useState(false)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const onClickOpen = useCallback(() => {
    SetSideMenu(!isOpenSideMenu)
  }, [isOpenSideMenu])

  return (
    <SMainWrapper className="global-wrapper" data-is-root-path={isRootPath}>
      <Header onClickOpen={onClickOpen} />
      <SMain>
        {children}
        {isOpenSideMenu && <SideMenu />}
      </SMain>
      <SFooter>
        <p>© {new Date().getFullYear()}, written by Nakayama</p>
        <p>
          Powered by a <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </SFooter>
    </SMainWrapper>
  )
})

const SMain = styled.div`
  width 90%;
  margin 0 auto;
  padding-bottom: 60px;
  position: relative;
    max-width: 1100px;

  `

const SFooter = styled.div`
  background-color: #ffc9ef;
  margin-top: auto;
  text-align: center;
  padding: 3px 0px 3px 0px;
`

const SMainWrapper = styled.div`
  background-color: #fff5fd;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

export default Layout
