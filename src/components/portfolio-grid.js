import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import PortfolioMore from "./portfolio-link"
import FlipCard from "./flipcard"
import Paper from "@material-ui/core/Paper"

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
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ justifyContent: "center" }}
            >
              {/* <Paper style={{ height: "300px", width: "300px" }} /> */}
              <FlipCard node={node} />
            </Grid>
          ))}
          {more && (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ justifyContent: "center" }}
            >
              <PortfolioMore />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default PortfolioGrid
