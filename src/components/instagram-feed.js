import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { GatsbyImage } from "gatsby-plugin-image"
import InstagramIcon from "@material-ui/icons/Instagram"
import Button from "@material-ui/core/Button"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 8) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                gatsbyImageData(height: 100, width: 100)
              }
              publicURL
            }
            timestamp
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div style={{ width: "350px", paddingBottom: "2rem" }}>
      <a
        href="https://instagram.com/thejennego"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<InstagramIcon />}
          style={{ marginBottom: "5px" }}
        >
          @thejennego
        </Button>
      </a>
      <Grid container spacing={0}>
        {data.allInstaNode.edges.map(({ node }) => (
          <Grid item xs={3}>
            <a
              href={`http://instagram.com/p/${node.id}`}
              target="_open"
              rel="no-follow"
            >
              <GatsbyImage
                className="instaPic"
                image={node.localFile.childImageSharp.gatsbyImageData}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default InstagramFeed
