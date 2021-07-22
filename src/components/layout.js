/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./sections/footer"
import SEO from "./seo"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    type: "dark",

    primary: {
      light: "#757ce8",
      main: "#5d97f5",
      dark: "#5d97f5",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
        {/* <Footer /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
