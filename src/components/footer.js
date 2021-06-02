import React from "react"

const Footer = () => {
  return (
    <div>
      Hi © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  )
}

export default Footer
