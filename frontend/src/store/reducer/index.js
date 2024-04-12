import { combineReducers } from "redux"
import categoryArticle from "./categoryArticle"
import allArticle from "./allArticle"
import searchArticle from "./searchArticle"
import userPreferences from "./userPreferences"

const reducer = combineReducers({
  all_articles: allArticle,
  cat_articles: categoryArticle,
  search: searchArticle,
  preferences: userPreferences,
})

export default reducer
