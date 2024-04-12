import { 
  endpointSearch, 
  endpointAll, 
  endpointCategory, 
  endpointUserPreferences,
  endpointUserPreferencesGet
} from "../../config/api"
import axios from "./../../config/axios"
import {
  SEARCH_ARTICLE_REQUEST,
  SEARCH_ARTICLE_SUCCESS,
  SEARCH_ARTICLE_FAILURE,
  ALL_ARTICLE_REQUEST,
  ALL_ARTICLE_SUCCESS,
  ALL_ARTICLE_FAILURE,
  CATEGORY_ARTICLE_REQUEST,
  CATEGORY_ARTICLE_SUCCESS,
  CATEGORY_ARTICLE_FAILURE,
  SET_USER_PREFERENCES_REQUEST,
  SET_USER_PREFERENCES_SUCCESS,
  GET_USER_PREFERENCES_SUCCESS,
  SET_USER_PREFERENCES_FAILURE
} from "./actionTypes"

const fetchSearchArticleRequest = () => ({
  type: SEARCH_ARTICLE_REQUEST,
})

const fetchSearchArticleSuccess = (result, query) => ({
  type: SEARCH_ARTICLE_SUCCESS,
  payload: {
    articles: result,
    query: query,
  },
})

const fetchSearchArticleFailure = (error) => ({
  type: SEARCH_ARTICLE_FAILURE,
  payload: error,
})

const fetchAllArticleRequest = () => ({
  type: ALL_ARTICLE_REQUEST,
})

const fetchAllArticleSuccess = (result, query) => ({
  type: ALL_ARTICLE_SUCCESS,
  payload: {
    allArticles: result,
    query: query,
  },
})

const fetchAllArticleFailure = (error) => ({
  type: ALL_ARTICLE_FAILURE,
  payload: error,
})

const fetchCategoryArticleSuccess = (result, query) => ({
  type: CATEGORY_ARTICLE_SUCCESS,
  payload: {
    categoryArticles: result,
    query: query,
  },
})

const fetchCategoryArticleRequest = () => ({
  type: CATEGORY_ARTICLE_REQUEST,
})

const fetchCategoryArticleFailure = (error) => ({
  type: CATEGORY_ARTICLE_FAILURE,
  payload: error,
})

const setUserPreferencesFailure = (error) => ({
  type: SET_USER_PREFERENCES_FAILURE,
  payload: error,
})

const setUserPreferencesSuccess = (result, query) => ({
  type: SET_USER_PREFERENCES_SUCCESS,
  payload: {
    preferences: result,
    query: query,
  },
})

const getUserPreferencesSuccess = (result, query) => ({
  type: GET_USER_PREFERENCES_SUCCESS,
  payload: {
    preferences: result,
    query: query,
  },
})

const setUserPreferencesRequest = () => ({
  type: SET_USER_PREFERENCES_REQUEST,
})

export const setUserPreferences = (category, source, author) => async (dispatch) => {
  try {
    dispatch(setUserPreferencesRequest())
    const response = await axios.post(endpointUserPreferences(), { category, source, author })
    const result = response.data
    dispatch(setUserPreferencesSuccess(result, category, source, author))
  } catch (error) {
    dispatch(setUserPreferencesFailure(error.message))
  }
}

export const getUserPreferences = () => async (dispatch) => {
  try {
    dispatch(setUserPreferencesRequest())
    const response = await axios.get(endpointUserPreferencesGet())
    const result = response.data
    dispatch(getUserPreferencesSuccess(result))
  } catch (error) {
    dispatch(setUserPreferencesFailure(error.message))
  }
}

export const searchArticle = (query, selectedDateRange, selectedSource) => async (dispatch) => {
  try {
    dispatch(fetchSearchArticleRequest())
    const response = await axios.get(endpointSearch(query, selectedDateRange, selectedSource))
    const result = response.data
    dispatch(fetchSearchArticleSuccess(result, query))
  } catch (error) {
    dispatch(fetchSearchArticleFailure(error.message))
  }
}

export const categoryArticle = (query, selectedDateRange = null, selectedSource = null) => async (dispatch) => {
  try {
    dispatch(fetchCategoryArticleRequest())
    const response = await axios.get(endpointCategory(query, selectedDateRange, selectedSource))
    const result = response.data
    dispatch(fetchCategoryArticleSuccess(result, query))
  } catch (error) {
    dispatch(fetchCategoryArticleFailure(error.message))
  }
}

export const allArticle = (query) => async (dispatch) => {
  try {
    dispatch(fetchAllArticleRequest())
    const response = await axios.get(endpointAll(query))
    const result = response.data
    dispatch(fetchAllArticleSuccess(result, query))
  } catch (error) {
    dispatch(fetchAllArticleFailure(error.message))
  }
}