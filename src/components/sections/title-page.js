import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
// import Button from "@material-ui/core/Button"
// import { ArrowDown } from "../navArrows"
// import SocialMedia from "../social-media"

const TitlePage = ({ toNextPage }, props) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className="overlay">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1 className="site-title">Jennifer Chow</h1>
          <h2 className="site-subtitle">Web Developer</h2>
          {/* <ArrowDown click={toNextPage} /> */}
        </div>
      </div>

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
    </div>
  )
}

export default TitlePage
