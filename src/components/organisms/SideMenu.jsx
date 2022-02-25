import * as React from "react"
import { Link } from "gatsby"

import {
  sidebar_menu,
  sidebar_button,
} from "./../../../css/components/sidebar.module.css"
import styled from "styled-components"

const SideMenu = () => {
  const SideBarWords = ["トップ", "記事一覧", "著者について"]
  return (
    <ul className={sidebar_menu}>
      <Link to="/hello-world" className={sidebar_button}>
        <li>トップ</li>
      </Link>
      <Link to="/hello-world" className={sidebar_button}>
        <li>記事一覧</li>
      </Link>
      <Link to="/hello-world" className={sidebar_button}>
        <li>著者について</li>
      </Link>
    </ul>
  )
}

const SideMenuWrapper = styled.div``

export default SideMenu
