import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { navigate } from "gatsby"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

import { pagination } from "./../../../css/components/pagination.module.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa5e4",
    },
  },
})

const Paginations = ({ pageContext }) => {
  const { numberOfPages, humanPageNumber } = pageContext
  const handleChange = (_event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/page/${value}`)
  }

  return (
    <Stack spacing={2}>
      <ThemeProvider theme={theme}>
        <Pagination
          defaultPage={humanPageNumber}
          count={numberOfPages}
          onChange={handleChange}
          className={pagination}
          color="primary"
        />
      </ThemeProvider>
    </Stack>
  )
}

export default Paginations
