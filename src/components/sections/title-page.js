import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import Button from "@material-ui/core/Button"

const TitlePage = ({ toNextPage }, props) => {
  const handleClick = e => {
    console.log("click handled!")
  }
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={0.3}
        className="center-layer"
        style={{ zIndex: "5", color: "white" }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 className="site-title">Jennifer Chow</h1>
          <h2 className="site-subtitle">Web Developer</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} className="center-layer">
        <StaticImage
          src="../../images/ray.jpg"
          className="clip"
          objectPosition="50% 80%"
          objectFit="cover"
          transformOptions={{
            grayscale: true,
          }}
          alt="horse"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}
        speed={0.5}
        style={{ zIndex: "100" }}
        className="center-layer"
      >
        <FontAwesomeIcon
          onClick={toNextPage}
          className="arrows"
          icon={faArrowAltCircleDown}
          size="3x"
          style={{
            color: "white",
          }}
        />
      </ParallaxLayer>
    </div>
  )
}

export default TitlePage
