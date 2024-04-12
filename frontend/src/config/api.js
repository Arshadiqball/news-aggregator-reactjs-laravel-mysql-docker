
import { API_DOMAIN } from './../assets/utils/helper'

export const endpointAll = (country, category) =>
  `${API_DOMAIN}articles?lang=en`

export const endpointSearch = (search, selectedDateRange, selectedSource) =>
  `${API_DOMAIN}articles/search/${search}/${selectedDateRange}/${selectedSource}`

export const endpointCategory = (category, selectedDateRange, selectedSource) =>
  `${API_DOMAIN}articles/category/${category}/${selectedDateRange}/${selectedSource}`

export const endpointUserPreferences = () =>
  `${API_DOMAIN}user/preferences`

export const endpointUserPreferencesGet = () =>
  `${API_DOMAIN}user/preferences`
  