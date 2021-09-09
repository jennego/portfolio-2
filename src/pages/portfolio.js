import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import PortfolioGrid from "../components/portfolio-grid"
import Button from "@material-ui/core/Button"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

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
    <Layout>
      <div>
        <div style={{ textAlign: "left" }}>
          <h1 className="section-heading portfolio-heading">Portfolio</h1>
        </div>

        <div className="shape">
          <div className="shape-orange shape-content">
            {console.log(location)}
            <PortfolioGrid data={data} location={location.pathname} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "5rem",
          }}
        >
          <Button variant="outlined" component={Link}>
            Go Back Home
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
