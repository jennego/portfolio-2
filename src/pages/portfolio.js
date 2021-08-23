import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../components/portfolio-grid"
import useBreakpoint from "use-breakpoint"
import Button from "@material-ui/core/Button"
import PortfolioMore from "../components/portfolio-link"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"

/// Max 5 or 8 in section? Tag with front page

const BREAKPOINTS = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1400 }

const ContentWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer offset={0.05} factor={1} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={0.05} factor={1} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  }
}

const PortfolioPage = ({ location }) => {
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
    <div>
      <div style={{ textAlign: "left" }}>
        <h1 className="section-heading portfolio-heading">Portfolio</h1>
        <Button variant="outlined" color="#fff">
          Go Home{" "}
        </Button>
      </div>

      <div className="shape">
        <div className="shape-orange shape-content">
          {console.log(location)}
          <PortfolioGrid data={data} location={location.pathname} />
        </div>
      </div>
      <Button variant="contained"> Go Back Home </Button>
    </div>
  )
}

export default PortfolioPage
