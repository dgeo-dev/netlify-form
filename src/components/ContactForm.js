import React from "react"
import "./ContactForm.css"

function ContactForm() {
  return (
    <div className="contact">
      <h1>Contactez nous !</h1>
      <form
        className="contact__form"
        name="contact"
        data-netlify="true"
        method="post"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label for="name">Nom</label>
        <input type="text" name="name" />

        <label for="email">Mail</label>
        <input type="email" name="email" />

        <label for="message">Message</label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default ContactForm
