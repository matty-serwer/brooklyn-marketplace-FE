import { FETCH_ITEMS, FETCH_CATEGORIES, FETCH_LOCATIONS } from "./../types"

const initialState = {
  items: [],
  categories: [],
  locations: [],
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload
      }
    default:
      return state;
  }
}