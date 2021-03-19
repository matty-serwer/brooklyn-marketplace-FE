import { FETCH_ITEMS } from "./../types";
import axios from 'axios';
import axiosWithAuth from "./../../utils/axiosWithAuth";

export const fetchItems = () => (dispatch) => {
  console.log("fetchItems action");
  axios
    .get("api/items")
    .then((res) => res.json())
    .then((items) =>
      dispatch({
        type: FETCH_ITEMS,
        payload: items,
      })
    )
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