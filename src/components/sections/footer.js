import React from "react"
import { ParallaxLayer } from "@react-spring/parallax"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import InstagramFeed from "../instagram-feed"
import useBreakpoint from "use-breakpoint"

const BREAKPOINTS = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1400 }
const ContentWrapper = ({ children, breakpoint }) => {
  if (breakpoint === "xs") {
    return (
      <ParallaxLayer offset={4} speed={0}>
        {children}
      </ParallaxLayer>
    )
  } else {
    return (
      <ParallaxLayer offset={3.98} speed={0}>
        {children}
      </ParallaxLayer>
    )
  }
}

const Footer = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs")

  return (
    <ParallaxLayer offset={4} factor={1} speed={0}>
      <div className="shape-footer">
        <div className="footer-bg shape-content" style={{ minHeight: "15vh" }}>
          <Container>
            <Grid container flex>
              <Grid xs={12} sm={4}>
                Created with Gatsby. Social Media
              </Grid>
              <Grid xs={12} sm={4}>
                jennego.com
              </Grid>
              <Grid xs={12} sm={4}>
                {/* <InstagramFeed /> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </ParallaxLayer>
  )
}

export default Footer
