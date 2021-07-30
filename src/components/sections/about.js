import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useBreakpoint from "use-breakpoint"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const BREAKPOINTS = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1400 }

const About = props => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
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
      {console.log(breakpoint)}
      <ParallaxLayer offset={2} speed={0.2}>
        <div style={{ textAlign: "left", zIndex: "-100" }}>
          <h1 className="section-heading about-heading">About</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} factor={1} speed={0.4}>
        {/* for xs <ParallaxLayer offset={2.2} factor={1} speed={0.4}> */}

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
