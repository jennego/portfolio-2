import React, { useRef } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import TitlePage from "../components/sections/title-page"
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

  return (
    <Layout>
      <TitlePage toNextPage={() => clickHandler()} />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
