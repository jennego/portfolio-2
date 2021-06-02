import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "./portfolio-grid"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

// convert to rich text fields?

const About = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSiteInfoAboutMeTextNode {
        aboutMe
      }
    }
  `)

  const content = data.contentfulSiteInfoAboutMeTextNode.aboutMe
  return (
    <>
      <ParallaxLayer offset={2} speed={0}>
        <div style={{ textAlign: "left", zIndex: "-100" }}>
          <h1 className="section-heading about-heading">About</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} factor={1} speed={0.4}>
        <div className="shape-green">
          <div className="shape-content  green-bg">
            <Container>{content}</Container>
          </div>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default About
