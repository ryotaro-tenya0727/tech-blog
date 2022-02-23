import * as React from "react"
import { Link } from "gatsby"

import { Header } from "./components"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, written by Nakayama</footer>
    </div>
  )
}

export default Layout
