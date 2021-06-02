import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import PortfolioGrid from "./portfolio-grid"
import { Container } from "@material-ui/core"

const About = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={0}>
        <div style={{ textAlign: "left", zIndex: "-100" }}>
          <h1 className="section-heading about-heading">About</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} factor={1} speed={0.4}>
        <div className="shape-green">
          <div className="shape-content  green-bg">
            <Container>
              Cupcake ipsum dolor sit amet. I love jelly beans donut biscuit
              pastry chupa chups. Toffee liquorice soufflé liquorice marzipan.
              Cake tiramisu marshmallow dessert chupa chups lollipop chocolate.
              Pie fruitcake caramels chupa chups oat cake dragée. Fruitcake pie
              toffee lemon drops. Liquorice chocolate tiramisu icing lollipop
              sweet macaroon. Dragée marshmallow dragée cake dessert tootsie
              roll gummies powder sweet roll. Icing tart pudding apple pie
              chocolate cake danish tart I love jelly. Halvah candy canes gummi
              bears brownie chocolate cake chupa chups. Lollipop toffee jelly-o
              jelly beans I love powder. Cupcake marshmallow soufflé dessert
              sweet candy jelly. Biscuit brownie powder. Pudding liquorice
              biscuit tootsie roll I love icing. Jujubes gingerbread tootsie
              roll wafer. Dessert tiramisu carrot cake chupa chups marshmallow
              jelly sesame snaps. Danish I love apple pie chocolate cake apple
              pie sweet roll lemon drops. Donut I love chocolate I love
              marshmallow tiramisu tiramisu pie. Pastry jelly beans chocolate
              marshmallow I love. Pudding halvah I love. Chocolate bar tiramisu
              gummies marzipan marzipan pudding candy. Jelly beans dragée
              jujubes pudding tootsie roll.
            </Container>
          </div>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default About
