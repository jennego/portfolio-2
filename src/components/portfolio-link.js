import React from "react"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"
import { Typography } from "@material-ui/core"

const PortfolioMore = () => {
  return (
    <div style={{ width: "500px" }}>
      <Typography variant="h1" component="p">
        Full Portfolio
        <DoubleArrowIcon />
      </Typography>
    </div>
  )
}

export default PortfolioMore
