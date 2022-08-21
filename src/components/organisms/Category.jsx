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

import {
  category_tag_button,
  category_count,
} from "./../../../css/components/button.module.css"

import { category_icon } from "./../../../css/components/icon.module.css"

const Category = ({ tags, category_wrapper }) => {
  return (
    <Card className={category_wrapper}>
      <CardContent className={category_card}>
        <p className={category_title_wrapper}>
          <FolderCopyIcon
            className={category_icon}
            sx={{
              fontSize: "16px",
            }}
          />
          <span className={category_title}>カテゴリ一覧</span>
        </p>
        {tags.map((tag, index) => {
          return (
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`} key={index}>
              <button className={category_tag_button}>
                {`${tag.fieldValue}`}
                <span className={category_count}>{`${tag.totalCount}`}</span>
              </button>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default Category
