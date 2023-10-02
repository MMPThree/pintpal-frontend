import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import './SignUp.css'

const SignUp = ({ signup }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password, username: data.username }
    }
    signup(userInfo)
    e.target.reset()
    navigate("/")
  }

  return (
    <div className='signup-body'>
      <h2 className='sign-header'>Sign Up</h2>
      <form className='signup-form' ref={formRef} onSubmit={handleSubmit}>
        Username: <input type="text" name="username" placeholder="username" className='signup-input' />
        <br />
        Email: <input type="email" name="email" placeholder="email" className='signup-input' />
        <br />
        Password: <input type="password" name="password" placeholder="password" className='signup-input' />
        <br />
        Password Confirmation:{" "}
        <input
          className='signup-input'
          type="password"
          name="password_confirmation"
          placeholder="Confirm 
      password"
        />
        <br />
        <input className="submit-form" type='submit' value="Register" />
        <div className="bottom-link">Already have an account?
          <a href="/login">  <u style={{ textDecoration: "none" }}>Login</u></a>
        </div>
      </form>
    </div>
  )
}

export default SignUp