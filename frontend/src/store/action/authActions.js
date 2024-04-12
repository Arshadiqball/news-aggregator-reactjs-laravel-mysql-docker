import axios from 'axios'
import { 
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
 } from './actionTypes'
import { API_DOMAIN } from '../../assets/utils/helper'

const registerRequest = () => ({
  type: REGISTER_REQUEST,
})

const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
})

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
})

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest())
  try {
    const { name, email, password, password_confirmation } = data
    const response = await axios.post(`${API_DOMAIN}register`, {
      name,
      email,
      password,
      password_confirmation,
    })

    return dispatch(registerSuccess(response.data))
  } catch (error) {
    return dispatch(registerFailure("Registration failed. Please try again."))
  }
}