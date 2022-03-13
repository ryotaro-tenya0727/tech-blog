import React from "react"

const BaseButton = ({ word, base_button_style }) => {
  return <button className={base_button_style}>{word}</button>
}
export default BaseButton
