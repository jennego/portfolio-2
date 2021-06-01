import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "./portfolio-grid"

const Portfolio = () => {
  return (
    <>
      <ParallaxLayer offset={1} speed={0.2} style={{ zIndex: "5" }}>
        <div style={{ textAlign: "left" }}>
          <h1 className="portfolio-heading">Portfolio</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} factor={1} speed={0.4}>
        {/* <div className="shape-top"></div> */}

        <div className="shape">
          <div className="shape-orange">
            <PortfolioGrid />
          </div>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default Portfolio
