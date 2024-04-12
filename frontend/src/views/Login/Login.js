import React, { useState, useContext } from "react"
import { capitaLize } from '../../assets/utils/helper'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { getToken } from "../../services/authorization"
import Context from './../../context/UserContext'
import styled from "styled-components"
import { Link } from "react-router-dom"

const RegisterLink = styled(Link)`
  color: #000 !important;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false) // State for loading spinner
  const { email, password } = formData
  const { login } = useContext(Context)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await login(formData)
    setLoading(false) 
    if (getToken()) {
      toast.success("Logged In")
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } else {
      toast.error("Invalid Credentials")
    }
  }

  const title = capitaLize('Login')
  document.title = capitaLize(title)

  return (
    <div className="container2">
      <div className="screen">
        <div className="screen__content">
          <form className="login" style={{ paddingTop: "150px" }} onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="email" className="login__input" placeholder="User name / Email"
                required
                onChange={handleChange}
                id="email"
                name="email"
                value={email} />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password"
                value={password}
                required
                onChange={handleChange}
                name="password"
                id="password" />
            </div>
            <button className="button login__submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="button__text">Logging In...</span>
                  <div className="spinner-border button__spinner" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </>
              )}
            </button>
          </form>
          <div className="social-login">
            <p className="mt-3 text-center">
              Don't have an account? <RegisterLink to="/register">Create one</RegisterLink>
            </p>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}

export default Login
