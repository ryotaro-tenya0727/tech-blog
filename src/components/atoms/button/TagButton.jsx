import * as React from "react"

import { tag_button } from "./../../../../css/components/button.module.css"

const TagButton = ({ word }) => {
  return <button className={tag_button}>{word}</button>
}
export default TagButton
