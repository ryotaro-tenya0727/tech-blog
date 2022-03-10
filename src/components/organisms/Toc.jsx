import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import styled from "styled-components"

import { toc_card, toc_wrapper } from "./../../../css/components/toc.module.css"

const Items = ({ tableOfContents, depth }) => {
  return (
    <ul>
      {tableOfContents.map(item => (
        <li
          key={item.url}
          style={{
            paddingLeft: depth !== 0 ? "1em" : "0",
          }}
        >
          <a href={item.url}>{item.title}</a>
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
          <h3>Table of Contents</h3>
          <Items tableOfContents={tableOfContents.items} depth={0} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Toc
