import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import useBreakpoint from "use-breakpoint"
import PortfolioMore from "../portfolio-link"
import { useStaticQuery, graphql } from "gatsby"

/// Max 5 or 8 in section? Tag with front page

const BREAKPOINTS = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1400 }

const ContentWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer offset={1.05} factor={1} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={1.05} factor={1} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  }
}

const Portfolio = props => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS)

  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        edges {
          node {
            id
            name
            slug
            shortDescription
            mainPhoto {
              gatsbyImageData
              fixed(width: 500) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <ParallaxLayer offset={1} speed={0}>
        <div style={{ textAlign: "left" }}>
          <h1 className="section-heading portfolio-heading">
            Selected Projects
          </h1>
        </div>
      </ParallaxLayer>

      <ContentWrapper breakpoint={breakpoint}>
        <div className="shape">
          <div className="shape-orange shape-content">
            <PortfolioGrid data={data} />
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}

export default Portfolio
