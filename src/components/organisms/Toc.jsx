import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Link } from "gatsby"
import ListIcon from "@mui/icons-material/List"

import {
  toc_card,
  toc_wrapper,
  toc_link,
  toc_heading_wrapper,
  toc_title,
} from "./../../../css/components/toc.module.css"

const Items = ({ tableOfContents, depth }) => {
  return (
    <ul>
      {tableOfContents.map(item => (
        <li
          key={item.url}
          style={{
            paddingLeft: depth !== 0 ? "15px" : "0",
            listStyle: "none",
          }}
        >
          <Link to={item.url} className={toc_link}>
            {item.title}
          </Link>
          {item.items && (
            <Items tableOfContents={item.items} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  )
}

const Toc = ({ tableOfContents }) => {
  return (
    <Card className={toc_wrapper}>
      <CardContent className={toc_card}>
        <div>
          <p className={toc_heading_wrapper}>
            <ListIcon sx={{ fontSize: 32 }} />
            <p className={toc_title}>見出しへのリンク</p>
          </p>
          <Items tableOfContents={tableOfContents.items} depth={0} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Toc
