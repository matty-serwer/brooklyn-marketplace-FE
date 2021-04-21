import { FETCH_ITEMS, FETCH_CATEGORIES } from "./../types";
import axios from 'axios';
import axiosWithAuth from "./../../utils/axiosWithAuth";

const BACKEND_URL =
  process.env.REACT_APP_BE_DEPLOYED || 'http://localhost:5000';

// items

export const fetchItems = () => (dispatch) => {
  console.log("fetchItems action");
  axios
    .get(`${BACKEND_URL}api/items`)
    .then(response => {
      dispatch({ type: FETCH_ITEMS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createItem = (itemData) => (dispatch) => {
  console.log("createItem action")
  axiosWithAuth()
    .post("api/items", itemData)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

// categories

export const fetchCategories = () => (dispatch) => {
  console.log("fetchCategories action")
  axios
    .get(`${BACKEND_URL}api/items`)
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    })
}