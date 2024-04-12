import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { login, register, logout, checkToken } from './apis'
import { UNAUTHORIZED_RESPONSE_STATUS_CODE } from './../assets/utils/constants'

const Context = React.createContext()
const initialUser = localStorage.getItem('user')
const initialState = {
  user: (initialUser && JSON.parse(initialUser)) || {},
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user)

  const handleSetUser = (data) => {
    
    localStorage.setItem("token", data.token)
    const setLS = newUser => localStorage.setItem('user', JSON.stringify(newUser))
    if (typeof data === 'function') {
      setUser((prevUser) => {
        const newUser = data(prevUser)
        setLS(newUser)
        return newUser
      })
    } else {
      setLS(data)
      setUser(data)
    }
  }

  const handleLogin = async (loginData) => {
    try {
      const loginResponse = await login(loginData)
      const result = loginResponse?.data || {}
      const isSuccessful = !Object.keys(result).includes('error')
      if (isSuccessful) {
        handleSetUser({
          isLoggedIn: true,
          ...result,
          tokenReceiveTime: new Date().getTime(),
          email: loginData.email,
          name: result.user.name,
        })
      }
      return isSuccessful
    } catch (error) {
      return false
    }
  }

  const handleRegister = async (registerData) => {
    try {
      const registerResponse = await register(registerData)

      if (registerResponse.code !== 200) {
        return { errors: registerResponse.error }
      }

      return registerResponse.data.data
    } catch (error) {
      if (error.error) {
        return { errors: error.error }
      } else return { errors: ['Unknown error'] }
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      handleSetUser({})
      return true
    } catch {
      handleSetUser({})
      return true
    }
  }

  const handleCheckToken = () => {
    return checkToken()
  }

  const handleFetchUserData = () => {
    try {
      checkToken().then(({ data, error, code }) => {
        if (code === UNAUTHORIZED_RESPONSE_STATUS_CODE) {
          handleLogout()
        }
        if (data.user) {
          handleSetUser(prevUser => ({
            ...prevUser,
            ...data.user,
          }))
        }
        if (error) {
          console.error(error)
        }
      })
    } catch {
      handleLogout()
    }
  }

  useEffect(() => {
    const { tokenReceiveTime, expires_in: tokenExpiresIn } = user
    const now = new Date().getTime()
    if (now - tokenReceiveTime >= tokenExpiresIn * 1000) {
      handleSetUser({})
    }
  }, [user])

  return (
    <Context.Provider
      value={{
        user,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        checkToken: handleCheckToken,
        getUserData: handleFetchUserData,
      }}
    >
      {children}
    </Context.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node,
}

const UserConsumer = Context.Consumer

export { UserProvider, UserConsumer }
export default Context
