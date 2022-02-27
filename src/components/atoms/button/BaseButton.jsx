import * as React from "react"
import { Link } from "gatsby"

import { base_button } from "./../../../../css/components/button.module.css"

const BaseButton = ({ word }) => {
  return <button className={base_button}>{word}</button>
}
export default BaseButton
