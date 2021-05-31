import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const PortfolioGrid = () => {
  return (
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
    </Grid>
  )
}

export default PortfolioGrid
