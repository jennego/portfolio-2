import React from "react"
import { Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { graphql } from "gatsby"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ProjectSlider from "../components/slider"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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

  const document = {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: "Hello world!",
            marks: [],
            data: {},
          },
        ],
      },
    ],
  }

  return (
    <Layout>
      <SEO title="Page two" />

      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.2}>
          <div style={{ textAlign: "left", zIndex: "-100" }}>
            <h1>{projectData.name}</h1>
            {/* <h2> {projectData.shortDescription} </h2> */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} factor={1} speed={0.4}>
          <div className="shape-green">
            <div className="shape-content green-bg">
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    <Paper>
                      {console.log(projectData.gallery)}
                      <ProjectSlider
                        slides={projectData.gallery}
                        photo={projectData.mainPhoto.gatsbyImageData}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Paper style={{ padding: "1rem" }}>
                      <p> {projectData.shortDescription} </p>
                      Quick info panel Category: <br></br>
                      Tech: <br />
                      Client <br />
                      Github / site link
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div style={{ textAlign: "left", zIndex: "-100" }}>
            {console.log(projectData.longDescriptionRt.raw)}
            {documentToReactComponents(
              JSON.parse(projectData.longDescriptionRt.raw)
            )}
          </div>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default ProjectPage
