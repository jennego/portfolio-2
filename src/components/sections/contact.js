import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import ContactForm from "../contact-form"

// convert to rich text fields?

const Contact = () => {
  return (
    <>
      <ParallaxLayer offset={3} speed={0.2}>
        <div style={{ textAlign: "left", zIndex: "-100" }}>
          <h1
            className="section-heading about-heading"
            style={{ color: "#0741ed" }}
          >
            Contact
          </h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} factor={1} speed={0.4}>
        <div className="shape-blue">
          <div className="shape-content  blue-bg">
            <Container>
              <ContactForm />
            </Container>
          </div>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default Contact
