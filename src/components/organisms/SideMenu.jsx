import React from "react"
import { Link } from "gatsby"

import {
  sidebar_menu,
  sidebar_button,
  sidebar_li,
} from "./../../../css/components/sidebar.module.css"

const SideMenu = () => {
  return (
    <ul className={sidebar_menu}>
      <li className={sidebar_li}>
        <Link to="/" className={sidebar_button}>
          トップ
        </Link>
      </li>
      <li className={sidebar_li}>
        <Link to="/posts" className={sidebar_button}>
          記事一覧
        </Link>
      </li>
      <li className={sidebar_li}>
        <Link to="/hello-world" className={sidebar_button}>
          著者について
        </Link>
      </li>
    </ul>
  )
}

export default SideMenu
