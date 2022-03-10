import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Link } from "gatsby"
import styled from "styled-components"

import {
  toc_card,
  toc_wrapper,
  toc_title,
  toc_link,
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
          <p className={toc_title}>もくじへのリンク</p>
          <Items tableOfContents={tableOfContents.items} depth={0} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Toc
