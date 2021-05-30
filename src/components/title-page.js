import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const TitlePage = () => {
  return (
    <ParallaxLayer className="title-page" offset={0} speed={2.5}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <div>
          <h1>Jennifer Chow</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
    </ParallaxLayer>
  )
}

export default TitlePage
