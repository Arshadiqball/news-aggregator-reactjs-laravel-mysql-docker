import {
  SEARCH_ARTICLE_REQUEST, 
  SEARCH_ARTICLE_SUCCESS, 
  SEARCH_ARTICLE_FAILURE
} from "../action/actionTypes"

const initialState = {
  articles: [],
  query: "",
  loading: false,
}

const searchArticle = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        query: action.payload.query,
        loading: false,
      }
    case SEARCH_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SEARCH_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default searchArticle
