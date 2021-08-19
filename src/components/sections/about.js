import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useBreakpoint from "use-breakpoint"

const BREAKPOINTS = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1400 }

const HeadingWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer offset={2.85} speed={0.2}>
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={2} speed={0.2}>
        {children}
      </ParallaxLayer>
    )
  }
}

const ContentWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer
        offset={2.65}
        factor={1}
        speed={0.4}
        style={{ marginTop: "300px" }}
      >
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={2} factor={1} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  }
}

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
      <HeadingWrapper breakpoint={breakpoint}>
        <div style={{ textAlign: "left", zIndex: "-100" }}>
          <h1 className="section-heading about-heading">About</h1>
        </div>
      </HeadingWrapper>

      <ContentWrapper breakpoint={breakpoint}>
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
      </ContentWrapper>
    </>
  )
}

export default About
