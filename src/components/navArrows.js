import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons"

export const ArrowDown = ({ click }) => (
  <FontAwesomeIcon
    onClick={click}
    className="arrows"
    icon={faArrowAltCircleDown}
    size="3x"
    style={{
      color: "white",
    }}
  />
)

export const ArrowUp = ({ click }) => (
  <FontAwesomeIcon
    onClick={click}
    className="arrows"
    icon={faArrowAltCircleUp}
    size="3x"
    style={{
      color: "white",
    }}
  />
)
