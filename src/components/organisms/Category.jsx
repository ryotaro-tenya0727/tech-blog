import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import { Link } from "gatsby"

import _ from "lodash"
import { BaseButton } from "../components"
import {
  category_card,
  category_title,
  category_title_wrapper,
} from "./../../../css/components/category.module.css"

import { category_tag_button } from "./../../../css/components/button.module.css"

const Category = ({ tags, category_wrapper }) => {
  return (
    <Card className={category_wrapper}>
      <CardContent className={category_card}>
        <p className={category_title_wrapper}>
          <FolderCopyIcon />
          <p className={category_title}>カテゴリ一覧</p>
        </p>
        {tags.map(tag => {
          return (
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              <BaseButton
                word={`${tag.fieldValue} (${tag.totalCount})`}
                base_button_style={category_tag_button}
              />
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default Category
