import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (error) {
      console.error('Login Error:', error)
    }
  }
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
