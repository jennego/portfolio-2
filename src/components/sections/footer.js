import React from "react"
import { ParallaxLayer } from "@react-spring/parallax"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import InstagramFeed from "../instagram-feed"

const Footer = () => {
  return (
    <ParallaxLayer offset={3.9} factor={1} speed={0}>
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
                <InstagramFeed />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </ParallaxLayer>
  )
}

export default Footer
