import React, { useRef } from "react"
import { Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import { graphql } from "gatsby"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ProjectSlider from "../components/slider"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ArrowDown } from "../components/navArrows"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
      type
      techSkills
      otherSkills
      mainPhoto {
        gatsbyImageData
      }
      longDescriptionRt {
        raw
      }
      gallery {
        gatsbyImageData(height: 500, placeholder: BLURRED)
      }
    }
  }
`
const ProjectPage = ({ data, pageContext }) => {
  const { id, name, slug } = pageContext

  const projectData = data.contentfulPortfolio
  console.log(projectData)
  const parallax = useRef()
  const nextPage = () => {
    parallax.current.scrollTo(1)
  }

  return (
    <Layout>
      <SEO title={projectData.name} />

      <Parallax ref={parallax} pages={1.7} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "left", marginLeft: "0.5rem" }}>
              <h1>{projectData.name}</h1>
              <h2>{projectData.type} </h2>
              {/* <h2> {projectData.shortDescription} </h2> */}
            </div>

            <Button
              variant="outlined"
              component={Link}
              to="/"
              style={{ margin: "5px", maxHeight: "4rem" }}
            >
              <FontAwesomeIcon icon={faTimes} size="3x" />
            </Button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} factor={1} speed={0.4}>
          <div className="shape-green">
            <div className="shape-content green-bg">
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                    <Paper>
                      {console.log(projectData.gallery)}
                      <ProjectSlider
                        slides={projectData.gallery}
                        photo={projectData.mainPhoto.gatsbyImageData}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper style={{ padding: "1rem" }}>
                      <p> {projectData.shortDescription} </p>
                      Type: {projectData.type} <br />
                      Tech: {projectData.techSkills.join(", ")} <br />
                      <Button
                        startIcon={<FontAwesomeIcon icon={faGlobe} size="2x" />}
                      >
                        See site
                      </Button>
                      <Button
                        startIcon={
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                        }
                      >
                        See code
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className="arrow-position">
            <ArrowDown click={nextPage} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}>
          <div className="long-info">
            <Container>
              {documentToReactComponents(
                JSON.parse(projectData.longDescriptionRt.raw)
              )}
            </Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" component={Link} to="/">
                Go Back{" "}
              </Button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default ProjectPage
