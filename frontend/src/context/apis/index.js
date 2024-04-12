import { NEWS_API_ENDPOINT as endpoint } from './../../services'

export const login = data => endpoint
  .post({
    endpoint: '/login',
    data,
  })

export const register = data => endpoint
  .post({
    endpoint: 'auth/signup',
    data,
  })

export const logout = () => endpoint
  .post({
    endpoint: '/logout',
  })

export const getUserData = () => {
  return endpoint
    .get({
      endpoint: '/me',
    })
    .then(({ data }) => data)
}

export const checkToken = async () => {
  return localStorage.getItem('token')
}
