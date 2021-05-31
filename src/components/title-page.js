import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"

const TitlePage = () => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={0.3}
        className="center-layer"
        style={{ zIndex: "5" }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Jennifer Chow</h1>
          <h2>Web Developer</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.3} className="center-layer">
        <img
          src="https://source.unsplash.com/1600x900/?nature,water"
          className="clip"
          style={{ objectFit: "cover", height: "100vh", width: "100vw" }}
        />
      </ParallaxLayer>
    </>
  )
}

export default TitlePage
