import React from "react"
import { Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { graphql } from "gatsby"

export const query = graphql`
  query projectQuery($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      id
      name
      slug
      projectDate
      projectUrl
      shortDescription
      githubUrl
      categories
      mainPhoto {
        gatsbyImageData
      }
      longDescriptionRt {
        raw
      }
      gallery {
        gatsbyImageData
      }
    }
  }
`
const ProjectPage = ({ data, pageContext }) => {
  const { id, name, slug } = pageContext

  const projectData = data.contentfulPortfolio

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{projectData.name}</h1>
      <h2> {projectData.shortDescription} </h2>
      {console.log(data)}
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Paper>
            <p> Main photo or video {slug} </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper style={{ padding: "1rem" }}>
            Quick info panel Category: <br></br>
            Tech: <br />
            Client <br />
          </Paper>
        </Grid>
      </Grid>

      <p> Photo slider</p>
      <p> detailed info. Improve this!!!</p>
    </Layout>
  )
}

export default ProjectPage
