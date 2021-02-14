import { FETCH_ITEMS } from "./../types"

const initialState = {
  items: []
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}