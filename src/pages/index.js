import React, { useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitlePage from "../components/title-page"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const IndexPage = () => {
  const ref = useRef()
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "lightblue",
        }}
      >
        <p>Scroll down</p>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.9}
        speed={1}
        style={{ backgroundColor: "#ff6d6d" }}
      >
        <p>Scroll up</p>
      </ParallaxLayer>
    </Parallax>
  )
}

// const IndexPage = () => (
//   <Layout>
//     <TitlePage />
//     <Parallax>
//       <ParallaxLayer>
//         <p>Scroll down</p>
//       </ParallaxLayer>

//       <ParallaxLayer
//         offset={1}
//         speed={2}
//         style={{ backgroundColor: "#ff6d6d" }}
//       />

//       <ParallaxLayer
//         offset={1}
//         speed={0.5}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "white",
//         }}
//       >
//         <p>Scroll up</p>
//       </ParallaxLayer>
//     </Parallax>
//   </Layout>
// )

export default IndexPage
