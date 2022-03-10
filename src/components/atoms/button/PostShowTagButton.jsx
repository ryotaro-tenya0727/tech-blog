import * as React from "react"

import { post_show_tag_button } from "./../../../../css/components/button.module.css"

const PostShowTagButton = ({ word }) => {
  return <button className={post_show_tag_button}>{word}</button>
}
export default PostShowTagButton
