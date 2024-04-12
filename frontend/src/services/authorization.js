const getToken = () => {
  return localStorage.getItem('token') ?? null
}

export const unauthorizedInterceptor = async (error) => {
if (error.response && error.response.status === 401) {
    localStorage.setItem('user', JSON.stringify({}))
    window.location.href = '/login'
    return Promise.reject(error)
  } else if (error.response && error.response.data) {
    return Promise.reject(error.response.data)
  }
  return Promise.reject(error.message)
}

const getCommonHeaders = async (config) => {
  config.headers.Accept = 'application/json'
  return config
}

export const tokenInterceptor = async (config) => {
  await getCommonHeaders(config)
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}



// Function to clear user data from local storage
const clearUser = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

// Export the functions for use in other parts of the application
export { clearUser, getToken }
