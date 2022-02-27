import * as React from "react"
import { Link } from "gatsby"

import { base_button } from "./../../../../css/components/button.module.css"

const BaseButton = ({ word, url }) => {
  return (
    <Link to={url}>
      <button className={base_button}>{word}</button>
    </Link>
  )
}
export default BaseButton
