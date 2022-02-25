import * as React from "react"
import styled from "styled-components"
import { useState, useCallback } from "react"

import { Header } from "./components"
import { SideMenu } from "./../components/components"

const Layout = ({ location, title, children }) => {
  const [isOpenSideMenu, SetSideMenu] = useState(true)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const onClickOpen = useCallback(() => {
    SetSideMenu(!isOpenSideMenu)
  }, [isOpenSideMenu])

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header onClickOpen={onClickOpen} />
      <SMainWrapper>
        <SMain>
          {children}
          {isOpenSideMenu && <SideMenu />}
        </SMain>
      </SMainWrapper>
      <SFooter>© {new Date().getFullYear()}, written by Nakayama</SFooter>
    </div>
  )
}

const SMain = styled.div`
  max-width: 80%;
  margin 0 auto;
  position: relative;
`

const SFooter = styled.div`
  max-width: 80%;
  margin 0 auto;
`

const SMainWrapper = styled.div`
  background-color: #fff5fd;
`

export default Layout
