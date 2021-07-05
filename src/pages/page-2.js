import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectSlider from "../components/slider"

const SecondPage = () => {
  const click = () => console.log("hi")
  return (
    <Layout>
      <SEO title="Page two" />
      <button onClick={click}>Hi </button>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <ProjectSlider />
    </Layout>
  )
}

export default SecondPage
