import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"

const PortfolioGrid = () => {
  return (
    <div style={{ margin: "0", paddingTop: "20px" }}>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ height: "300px" }}>Hi</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PortfolioGrid
