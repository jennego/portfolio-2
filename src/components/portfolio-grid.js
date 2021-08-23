import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import PortfolioMore from "./portfolio-link"
import FlipCard from "./flipcard"
import Paper from "@material-ui/core/Paper"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const PortfolioGrid = ({ data, more, location }, props) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: "0",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
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
                <FlipCard node={node} locationProps={location} />
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
    </ThemeProvider>
  )
}

export default PortfolioGrid
