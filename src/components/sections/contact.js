import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "../portfolio-grid"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import ContactForm from "../contact-form"
import SocialMedia from "../social-media"
import useBreakpoint from "use-breakpoint"

const BREAKPOINTS = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1400 }

const HeadingWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer offset={3.5} speed={0.2}>
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={3} speed={0.2}>
        {children}
      </ParallaxLayer>
    )
  }
}

const ContentWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer offset={3.7} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={3} speed={0.4}>
        {children}
      </ParallaxLayer>
    )
  }
}

const Contact = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div style={{ textAlign: "left", zIndex: "-100" }}>
        <h1
          className="section-heading about-heading"
          style={{ color: "#0070fa" }}
        >
          Contact
        </h1>
      </div>

      <div className="shape-blue">
        <div className="shape-content  blue-bg">
          <Container>
            <ContactForm />
            <SocialMedia size="2x" />
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Contact
