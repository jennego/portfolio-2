import React, { useEffect, useRef, useCallback } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Container from "@material-ui/core/Container"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
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

  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <FontAwesomeIcon
        size="3x"
        icon={faChevronLeft}
        onClick={onClick}
        className="slide-arrows-prev slide-arrows"
      />
    )
  }

  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <FontAwesomeIcon
        size="3x"
        icon={faChevronRight}
        onClick={onClick}
        className="slide-arrows slide-arrows-next"
      />
    )
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <Container>
      {slides === null ? (
        <GatsbyImage image={photo} />
      ) : (
        <Slider
          ref={ref}
          {...settings}
          style={{ display: "flex", justifySelf: "center" }}
        >
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
