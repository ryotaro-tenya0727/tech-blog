import * as React from "react"
import styled from "styled-components"

import { Header } from "./components"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <SMainWrapper>
        <SMain>{children}</SMain>
      </SMainWrapper>
      <SFooter>© {new Date().getFullYear()}, written by Nakayama</SFooter>
    </div>
  )
}

const SMain = styled.div`
  max-width: 80%;
  margin 0 auto;
`

const SFooter = styled.div`
  max-width: 80%;
  margin 0 auto;
`

const SMainWrapper = styled.div`
  background-color: #fff5fd;
`

export default Layout
