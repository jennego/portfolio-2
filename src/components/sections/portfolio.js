import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import useBreakpoint from "use-breakpoint"
import PortfolioMore from "../portfolio-link"
import { useStaticQuery, graphql } from "gatsby"

/// Max 5 or 8 in section? Tag with front page

const Portfolio = props => {
  /// max 5 or 8 ?
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio(limit: 5) {
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
    <div style={{ marginTop: "5rem" }}>
      <div style={{ textAlign: "left" }}>
        <h1 className="section-heading portfolio-heading">Selected Projects</h1>
      </div>

      <div className="shape">
        <div className="shape-orange shape-content">
          <PortfolioGrid
            data={data}
            more={true}
            location={"www.jenniferchow.ca"}
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
