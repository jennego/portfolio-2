import React, { useEffect, useRef, useCallback } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Container from "@material-ui/core/Container"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectSlider = ({ slides }) => {
  const ref = useRef()

  useEffect(() => {
    document.addEventListener("keydown", arrowsFunction, false)

    return () => {
      document.removeEventListener("keydown", arrowsFunction, false)
    }
  }, [])

  const arrowsFunction = useCallback(event => {
    if (event.key === "ArrowLeft") {
      ref.current.slickPrev()
    } else if (event.key === "ArrowRight") {
      ref.current.slickNext()
    }
  })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <Container>
      <Slider ref={ref} {...settings}>
        {slides.map(slide => (
          <div>
            <GatsbyImage image={slide.gatsbyImageData} height={300} />
          </div>
        ))}
      </Slider>
    </Container>
  )
}

export default ProjectSlider
