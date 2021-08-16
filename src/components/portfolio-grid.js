import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import PortfolioMore from "./portfolio-link"
import FlipCard from "./flipcard"

const PortfolioGrid = ({ data, more }, props) => {
  return (
    <div
      style={{
        margin: "0",
        paddingTop: "20px",
        minHeight: "15rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          spacing={7}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <Grid item>
              <FlipCard node={node} />
            </Grid>
          ))}
          {more && (
            <Grid item>
              <PortfolioMore />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default PortfolioGrid
