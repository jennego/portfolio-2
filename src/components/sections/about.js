import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// convert to rich text fields?

const About = props => {
  const data = useStaticQuery(graphql`
    {
      contentfulSiteInfo {
        aboutRt {
          raw
        }
      }
    }
  `)

  const content = data.contentfulSiteInfo.aboutRt.raw
  return (
    <>
      <ParallaxLayer offset={2} speed={0.2}>
        <div style={{ textAlign: "left", zIndex: "-100" }}>
          <h1 className="section-heading about-heading">About</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} factor={1} speed={0.4}>
        <div className="shape-green">
          <div
            className="shape-content  green-bg"
            style={{ paddingBottom: "15px" }}
          >
            <Container>
              {documentToReactComponents(JSON.parse(content))}
            </Container>
          </div>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default About
