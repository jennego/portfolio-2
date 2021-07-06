import React, { useEffect, useRef, useCallback } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Container from "@material-ui/core/Container"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectSlider = ({ slides, photo }) => {
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
  }
  return (
    <Container>
      {slides === null ? (
        <GatsbyImage image={photo} />
      ) : (
        <Slider ref={ref} {...settings}>
          {slides.map(slide => (
            <div className="slide">
              <GatsbyImage image={slide.gatsbyImageData} />
            </div>
          ))}
        </Slider>
      )}
    </Container>
  )
}

export default ProjectSlider
