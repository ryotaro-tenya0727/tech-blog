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

      <SFooter>© {new Date().getFullYear()}, written by Nakayama</SFooter>
    </SMainWrapper>
  )
})

const SMain = styled.div`
  width: 95%;
  margin 0 auto;
  padding-bottom: 60px;
  position: relative;
  `

const SFooter = styled.div`
  background-color: #ffc9ef;
  margin-top: auto;
  text-align: center;
`

const SMainWrapper = styled.div`
  background-color: #fff5fd;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

export default Layout
