import React, { useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitlePage from "../components/sections/title-page"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Portfolio from "../components/sections/portfolio"
import About from "../components/sections/about"
import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"

const IndexPage = () => {
  const parallax = useRef()
  const clickHandler = () => {
    parallax.current.scrollTo(1)
    console.log("hi you have come to click handler")
  }

  // pages={4.5}
  return (
    <Layout>
      <Parallax ref={parallax} pages={4.5} style={{ top: "0", left: "0" }}>
        <TitlePage toNextPage={() => clickHandler()} />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </Parallax>
    </Layout>
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
