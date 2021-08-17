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
import { ArrowDown, ArrowUp } from "../components/navArrows"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useInView } from "react-intersection-observer"

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
        fixed {
          src
        }
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

  const [arrow, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <Layout>
      <SEO title={projectData.name} />
      {console.log("in view?", inView)}

      <Parallax ref={parallax} pages={1.7} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <div style={{ textAlign: "left", marginLeft: "0.5rem" }}>
              <h1>{projectData.name}</h1>
              <h2 class="project-sub-title">{projectData.type} </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "4rem",
              }}
            >
              <div>Next / Prev</div>
              {/* if history is main page navigate to main portfolio section, if not navigate to portfolio page */}
              <Button
                variant="outlined"
                component={Link}
                to="/"
                style={{ margin: "5px", maxHeight: "3rem" }}
              >
                <FontAwesomeIcon icon={faTimes} size="3x" />
              </Button>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} factor={1} speed={0.4}>
          <div className="shape-port">
            <div className="shape-content purple-bg">
              <Container ref={arrow}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    {/* {projectData.gallery.map(slide => (
                        <div>
                          <GatsbyImage image={slide.gatsbyImageData} />
                        </div>
                      ))} */}
                    <ProjectSlider {...projectData} />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Paper style={{ padding: "1rem" }}>
                      {projectData.shortDescription && (
                        <p> {projectData.shortDescription} </p>
                      )}
                      {projectData.type && <div>Type: {projectData.type}</div>}
                      {projectData.techSkills && (
                        <div>
                          Tech: {projectData.techSkills.join(", ")} <br />
                        </div>
                      )}
                      <Button
                        startIcon={<FontAwesomeIcon icon={faGlobe} size="2x" />}
                      >
                        See site
                      </Button>
                      {projectData.githubUrl && (
                        <Button
                          target="_blank"
                          href={projectData.githubUrl}
                          startIcon={
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                          }
                        >
                          See code
                        </Button>
                      )}
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className="arrow-position">
            {inView ? <ArrowDown click={nextPage} /> : <ArrowUp />}
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
