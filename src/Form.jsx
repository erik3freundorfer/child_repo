import React, { useState } from 'react'

const Form = () => {
  const [formValues, setFormValues] = useState({ noData: true })

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      lastName,
    } = e.target

    setFormValues({
      name: name.value,
      lastName: lastName.value,
      fullName: `${name.value} ${lastName.value}`,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <span>Name</span>

          <input type='text' name='name' />
        </label>

        <label htmlFor='lastName'>
          <span>Last Name</span>

          <input type='text' name='lastName' />
        </label>

        <button id='submit'>Submit</button>

        <input id='reset' type='reset' />
      </form>
    </>
  )
}

export default Form
