import React from "react"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"
import { Typography } from "@material-ui/core"
import { navigate } from "gatsby"

const PortfolioMore = () => {
  return (
    <div className="portfolio-more" onClick={() => navigate("/portfolio")}>
      <div
        style={{
          fontFamily: "Josefin Sans",
          fontSize: "80px",
          lineHeight: "65px",
        }}
      >
        Full <br />
        Portfolio
      </div>
      <DoubleArrowIcon style={{ fontSize: "40px" }} />
    </div>
  )
}

export default PortfolioMore
