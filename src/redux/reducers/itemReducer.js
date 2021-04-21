import { FETCH_ITEMS, FETCH_CATEGORIES } from "./../types"

const initialState = {
  items: [],
  categories: [],
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
    default:
      return state;
  }
}