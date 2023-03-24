import React, { useState } from 'react'

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm ({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(username, password)
    console.log(username, password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          id='username-input'
          type='text'
          onChange={(e) => setUsername(e.target.value)}></input>
        <input
          value={password}
          id='password-input'
          type='password'
          onChange={(e) => setPassword(e.target.value)}></input>
        <button
          id='login-button'
          disabled={!(password.length > 0 && username.length > 0)}
          type = "submit">{username}
        </button>
      </form>
    </div>
  )
}
