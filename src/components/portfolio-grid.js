import React, { useState } from "react"
import { useSpring, a } from "@react-spring/web"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./styles.module.css"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

const PortfolioGrid = () => {
  const [flipped, set] = useState(false)
  const [selected, setSelected] = useState("")
  const { transform, opacity } = useSpring({
    opacity: !flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${!flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 700, friction: 80 },
  })

  const flipCard = id => {
    setSelected(id)
    set(true)
  }

  const flipToFront = id => {
    setSelected(id)
    set(false)
  }

  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        edges {
          node {
            id
            name
            slug
            shortDescription
            mainPhoto {
              gatsbyImageData
              fixed(width: 500) {
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div style={{ margin: "0", paddingTop: "20px" }}>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {console.log(data)}
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <Grid item sm={6} md={3}>
              <div
                className={styles.container}
                onMouseEnter={() => flipCard(node.id)}
                onMouseLeave={() => flipToFront(node.id)}
                tabIndex={0}
              >
                <a.div
                  className={`${styles.c} ${styles.back}`}
                  style={
                    selected === node.id
                      ? { opacity: opacity.to(o => 1 - o), transform }
                      : {}
                  }
                >
                  <Container>
                    {node.name}
                    <p style={{ fontSize: "15px", lineHeight: "1.2rem" }}>
                      {node.shortDescription}
                    </p>
                    <Button size="small" variant="outlined" color="primary">
                      View Project
                    </Button>
                  </Container>
                </a.div>
                <a.div
                  className={`${styles.c} ${styles.front}`}
                  style={
                    selected === node.id
                      ? {
                          opacity,
                          transform,
                          rotateY: "180deg",
                          backgroundImage: `url(${node.mainPhoto.fixed.src})`,
                          backgroundSize: "cover",
                        }
                      : {
                          backgroundImage: `url(${node.mainPhoto.fixed.src})`,
                          backgroundSize: "cover",
                        }
                  }
                >
                  <div className={styles.title}>
                    <h3 style={{ margin: "8px", fontSize: "20px" }}>
                      {node.name}
                    </h3>
                  </div>
                </a.div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default PortfolioGrid
