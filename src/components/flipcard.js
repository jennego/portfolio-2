import React, { useState } from "react"
import { useSpring, a } from "@react-spring/web"
import { navigate } from "gatsby"
import * as styles from "./styles.module.css"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Layout from "./layout"

const FlipCard = ({ node, locationProps }) => {
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
    <Layout>
      <div
        className={styles.container}
        onMouseEnter={() => flipCard(node.id)}
        onMouseLeave={() => flipToFront(node.id)}
        onClick={() =>
          navigate(`/project/${node.slug}`, {
            state: { prevPath: locationProps },
          })
        }
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
            <Button size="small" variant="outlined">
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
            <h3 style={{ margin: "8px", fontSize: "20px" }}>{node.name}</h3>
          </div>
        </a.div>
      </div>
    </Layout>
  )
}

export default FlipCard
