import React from "react"
import * as resume from "../components/resume.module.css"
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"

// const theme = createMuiTheme({
//   Container: {
//     background: "#fff",
//   },
// })

const Resume = () => {
  return (
    <ThemeProvider>
      <Container style={{ margin: "1rem" }}>
        <header className={resume.header}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h1>Jennifer Chow</h1>
            </Grid>
            <Grid item xs={6} md={3}>
              Ladysmith, BC <br />
              www.jenniferchow.ca <br />
              jen[at]jenniferchow.ca
            </Grid>

            <Grid item xs={6} md={3}>
              <div>
                <Button variant="contained" startIcon={<PictureAsPdfIcon />}>
                  PDF{" "}
                </Button>
              </div>
              Select theme
            </Grid>
          </Grid>
        </header>

        <div className={resume.mainPage}>Hi</div>
        <div className={resume.page}>Blue background</div>
        <footer className={resume.header}>
          Using React (Gatsby), Material UI. Content is sourced from Contentful
          CMS.
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Resume
