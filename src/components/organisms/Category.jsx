import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Link } from "gatsby"

import _ from "lodash"
import { TagButton } from "../components"

import {
  category_wrapper,
  category_card,
  category_title,
} from "./../../../css/components/category.module.css"

const Category = ({ tags }) => {
  return (
    <Card className={category_wrapper}>
      <CardContent className={category_card}>
        <p className={category_title}>カテゴリ一覧</p>
        {tags.map(tag => {
          return (
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              <TagButton word={`#${tag.fieldValue}`} />
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default Category
