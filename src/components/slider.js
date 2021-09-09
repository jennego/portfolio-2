import React, { useEffect, useRef, useCallback } from "react"
import Container from "@material-ui/core/Container"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import Carousel from "react-material-ui-carousel"

const ProjectSlider = props => {
  const ref = useRef()
  const slides = props.gallery
  // useEffect(() => {
  //   document.addEventListener("keydown", arrowsFunction, false)

  //   return () => {
  //     document.removeEventListener("keydown", arrowsFunction, false)
  //   }
  // }, [])

  const arrowsFunction = useCallback(event => {
    if (event.key === "ArrowLeft") {
      ref.current.Prev()
    } else if (event.key === "ArrowRight") {
      ref.current.Next()
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <Container className="project-image">
      {console.log("slides received by slider", props.gallery)}
      {slides === null ? (
        <GatsbyImage image={props.mainPhoto.gatsbyImageData} />
      ) : (
        <div className="project-image">
          <Carousel
            timeout="800"
            interval="7000"
            animation="slide"
            navButtonsAlwaysVisible={true}
            ref={ref}
            style={{ display: "flex", justifySelf: "center" }}
          >
            {slides.map((slide, index) => (
              <div
                className="slide"
                style={{
                  display: "flex",
                  justifySelf: "center",
                }}
                key={index}
              >
                <GatsbyImage
                  image={slide.gatsbyImageData}
                  transformOptions={{ fit: "contain" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </Container>
  )
}

export default ProjectSlider
