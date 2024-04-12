import { 
  ALL_ARTICLE_REQUEST, 
  ALL_ARTICLE_SUCCESS, 
  ALL_ARTICLE_FAILURE
} from "../action/actionTypes"

const initialState = {
  allArticles: [],
  query: "",
  articleLoading: false,
}

const allArticle = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ARTICLE_SUCCESS:
      return {
        ...state,
        allArticles: action.payload.allArticles,
        query: action.payload.query,
        articleLoading: false,
      }
    case ALL_ARTICLE_FAILURE:
      return {
        ...state,
        articleLoading: false,
        error: action.payload,
      }
    case ALL_ARTICLE_REQUEST:
      return {
        ...state,
        articleLoading: true,
      }
    default:
      return state
  }
}

export default allArticle
