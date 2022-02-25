import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import { sidebar_menu } from "./../../../css/components/sidebar.module.css"
import styled from "styled-components"

const SideMenu = () => {
  const [isOpenSideMenu, SetSideMenu] = useState(false)
  const onClickOpen = () => {
    SetSideMenu(!isOpenSideMenu)
  }
  return (
    <ul className={sidebar_menu}>
      <li>HTML</li>
      <li>CSS</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
    </ul>
  )
}

const SideMenuWrapper = styled.div``

export default SideMenu
