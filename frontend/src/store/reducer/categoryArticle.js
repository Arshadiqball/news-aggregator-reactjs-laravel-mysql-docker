import { 
  CATEGORY_ARTICLE_REQUEST, 
  CATEGORY_ARTICLE_SUCCESS, 
  CATEGORY_ARTICLE_FAILURE 
} from "../action/actionTypes"

const initialState = {
  categoryArticles: [],
  query: "",
  categoryLoading: false,
}

const categoryArticle = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_ARTICLE_SUCCESS:
      return {
        ...state,
        categoryArticles: action.payload.categoryArticles,
        query: action.payload.query,
        categoryLoading: false,
      }
    case CATEGORY_ARTICLE_FAILURE:
      return {
        ...state,
        categoryLoading: false,
        error: action.payload,
      }
    case CATEGORY_ARTICLE_REQUEST:
      return {
        ...state,
        categoryLoading: true,
      }
    default:
      return state
  }
}

export default categoryArticle
