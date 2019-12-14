import React from 'react'
import { navigate } from 'gatsby-link'

import formStyles from './form.module.scss'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// export default function Contact() {
const Form = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form
      className={formStyles.form}
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h1>Contact Us!</h1>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>your name
            <input type="text" name="name" onChange={handleChange} />
        </label>
      </p>
      <hr className={formStyles.formBorder}/>
      <p>
        <label>email*
            <input type="email" name="email" onChange={handleChange} />
        </label>
      </p>
        <hr className={formStyles.formBorder}/>
      <p>
        <label>message
            <textarea type="text" name="message" onChange={handleChange} />
        </label>
      </p>
        <hr className={formStyles.formBorder}/>
      <p>
        <button className={formStyles.btnSubmit} type="submit">Send</button>
      </p>
    </form>
  )
}

export default Form;