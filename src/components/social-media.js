import React from "react"
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconButton from "@material-ui/core/IconButton"

const SocialMedia = ({ size }) => (
  <div className="social-media">
    <IconButton href="http://www.linkedin.com/in/jennego" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} size={size} />
    </IconButton>
    <IconButton href="http://www.instagram/thejennego.com" target="_blank">
      <FontAwesomeIcon icon={faInstagram} size={size} />
    </IconButton>
    <IconButton href="http://www.facebook.com/jennego" target="_blank">
      <FontAwesomeIcon icon={faFacebook} size={size} />
    </IconButton>
    <IconButton href="http://www.github.com/jennego" target="_blank">
      <FontAwesomeIcon icon={faGithub} size={size} />
    </IconButton>
    <IconButton href="http://www.twitter.com/jennego" target="_blank">
      <FontAwesomeIcon icon={faTwitter} size={size} />
    </IconButton>
  </div>
)

export default SocialMedia
