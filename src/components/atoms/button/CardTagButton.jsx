import React from "react"

import { card_tag_button } from "./../../../../css/components/button.module.css"

const CardTagButton = ({ word }) => {
  return <button className={card_tag_button}>{word}</button>
}
export default CardTagButton
