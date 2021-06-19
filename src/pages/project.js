import React from "react"
import { Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"

const ProjectPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Project Name</h1>
      <h2> Summary </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Paper>
            <p> Main photo or video </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper style={{ minHeight: "400px" }}>Quick info panel</Paper>
        </Grid>
      </Grid>

      <p> Photo slider</p>
      <p> detailed info. Improve this!!!</p>
    </Layout>
  )
}

export default ProjectPage
