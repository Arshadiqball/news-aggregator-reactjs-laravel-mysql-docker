import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../store/action/authActions"
import { capitaLize } from '../../assets/utils/helper'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #000 !important;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const { name, email, password, password_confirmation } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await dispatch(
        register({ name, email, password, password_confirmation })
      )
      if (response.type === "REGISTER_SUCCESS") {
        toast.success(response.payload.message)
        navigate('/login')
      } else {
        toast.error(response.payload)
      }
    } catch (error) {
      toast.error("An error occurred during registration.")
    }
  }

  const title = capitaLize("Register")
  document.title = capitaLize(title)

  return (
    <div class="container2">
      <div class="screen">
        <div class="screen__content">
          <form class="login" style={{ paddingTop: "30px" }} onSubmit={handleSubmit}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="name" class="login__input" placeholder="First and Last Name"
                required
                onChange={handleChange}
                id="name"
                name="name"
                value={name} />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="email" class="login__input" placeholder="Email"
                required
                onChange={handleChange}
                id="email"
                name="email"
                value={email} />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" placeholder="Password"
                value={password}
                required
                onChange={handleChange}
                name="password"
                id="password" />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" placeholder="Confirm Password"
                value={password_confirmation}
                required
                onChange={handleChange}
                name="password_confirmation"
                id="password_confirmation" />
            </div>
            <button class="button login__submit">
              <span class="button__text">Register</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <br />
          <div class="social-login">
            <p className="mt-3 text-center">
              Already have an account? <StyledLink to="/login">Back to Login</StyledLink>
            </p>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}

export default Register
