import ApiRequest from './apiRequest'
import { API_DOMAIN } from './../assets/utils/helper'

const NEWS_API_ENDPOINT = new ApiRequest(`${API_DOMAIN}`, true)

export {
  NEWS_API_ENDPOINT
}
