import axios from 'axios'
import { tokenInterceptor, unauthorizedInterceptor } from './authorization'

export default class ApiRequest {
  constructor (baseURL, auth = true) {
    this.baseURL = baseURL
    this.httpClient = axios.create({ baseURL })
    if (auth) {
      this.httpClient.interceptors.request.use(tokenInterceptor)
    }
    this.httpClient.interceptors.response.use(null, unauthorizedInterceptor)
  }

  get ({ endpoint, params, options }) {
    if (options?.userToken) {
      this.httpClient.defaults.headers.common.userToken = options.userToken
    }
    return this.httpClient.get(endpoint, {
      params,
      ...options,
    })
  }

  post ({ endpoint, data, options }) {
    return this.httpClient.post(endpoint, data, options)
  }
}
