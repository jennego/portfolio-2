import React, { useState } from "react"
import { useSpring, a } from "@react-spring/web"

import * as styles from "./styles.module.css"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"

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
          <p>flipped state? {flipped.toString()} </p>
          <Grid item xs={12} md={3}>
            <div
              className={styles.container}
              onMouseEnter={() => flipCard(1)}
              onMouseLeave={() => flipToFront(1)}
            >
              <a.div
                className={`${styles.c} ${styles.back}`}
                style={
                  selected === 1
                    ? { opacity: opacity.to(o => 1 - o), transform }
                    : {}
                }
              />
              <a.div
                className={`${styles.c} ${styles.front}`}
                style={
                  selected === 1
                    ? { opacity, transform, rotateY: "180deg" }
                    : {}
                }
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div
              className={styles.container}
              onMouseEnter={() => flipCard(2)}
              onMouseLeave={() => flipToFront(2)}
            >
              <a.div
                className={`${styles.c} ${styles.back}`}
                style={
                  selected === 2
                    ? { opacity: opacity.to(o => 1 - o), transform }
                    : {}
                }
              >
                <h1> Project Info </h1>
              </a.div>
              <a.div
                className={`${styles.c} ${styles.front}`}
                style={
                  selected === 2
                    ? { opacity, transform, rotateY: "180deg" }
                    : {}
                }
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PortfolioGrid
