import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "./portfolio-grid"

const About = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={0}>
        <div style={{ textAlign: "left" }}>
          <h1 className="section-heading about-heading">About</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} factor={1} speed={0.4}>
        <div className="shape">
          <div className="shape-orange shape-content">Content</div>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default About
