import React, { useState } from 'react'

const Form = () => {
  const [formValues, setFormValues] = useState({ noData: true })

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      lastName,
    } = e.target

    setFormValues({ name: name.value, lastName: lastName.value, fullName: `${name.value} ${lastName.value}` })
  }

  return (
    <>
      <pre>
        <code>
          {JSON.stringify(formValues)}
        </code>
      </pre>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <span>Name</span>

          <input type='text' name='name' />
        </label>

        <label htmlFor='lastName'>
          <span>Last Name</span>

          <input type='text' name='lastName' />
        </label>

        <button>Submit</button>
      </form>
    </>
  )
}

export default Form
