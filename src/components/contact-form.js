import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const ContactForm = () => {
  return (
    <form
      id="contact-form"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        fullWidth={true}
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        fullWidth={true}
        style={{ marginBottom: "15px" }}
      />
      <TextField
        name="message"
        id="standard-multiline-static"
        label="Message"
        multiline
        rows="4"
        placeholder="Placeholder"
        variant="outlined"
        fullWidth={true}
        style={{ marginBottom: "15px" }}
      />
      <Button
        style={{ alignSelf: "center" }}
        variant="contained"
        className="form-button"
        color="primary"
        type="submit"
        form="contact-form"
        value="Submit"
      >
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
