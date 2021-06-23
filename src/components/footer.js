import React from "react"
import { ParallaxLayer } from "@react-spring/parallax"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

const Footer = () => {
  return (
    <ParallaxLayer offset={3.9} factor={1} speed={0}>
      <div className="shape-footer">
        <div className="footer-bg shape-content" style={{ height: "15vh" }}>
          <Container>
            <Grid container flex>
              <Grid xs={12} sm={4}>
                Created with Gatsby. Social Media
              </Grid>
              <Grid xs={12} sm={4}>
                My other sites.
              </Grid>
              <Grid xs={12} sm={4}>
                Instagram
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </ParallaxLayer>
  )
}

export default Footer
