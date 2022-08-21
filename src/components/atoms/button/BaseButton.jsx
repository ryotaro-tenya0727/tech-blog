import React from "react"

const BaseButton = ({ word, base_button_style, count }) => {
  return (
    <button className={base_button_style}>
      {word}
      <span>{count}</span>
    </button>
  )
}
export default BaseButton
