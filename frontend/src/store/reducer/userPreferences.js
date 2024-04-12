import { 
  GET_USER_PREFERENCES_SUCCESS,
  SET_USER_PREFERENCES_SUCCESS,
  SET_USER_PREFERENCES_REQUEST,
  SET_USER_PREFERENCES_FAILURE
} from '../action/actionTypes'

const initialState = {
  preferences: "",
  query: "",
  loading: false,
}

const userPreferences = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        preferences: action.payload,
        query: action.payload.query,
        loading: false,
      }
    case SET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        preferences: action.payload,
        query: action.payload.query,
        loading: false,
      }
    case SET_USER_PREFERENCES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SET_USER_PREFERENCES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default userPreferences