import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
} from "./types";

export const fetchProducts = () => dispatch => {
  fetch("./items.json")
    .then(res => res.json())
    .then(data => {
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: data
      });
    });
};

export const filterProducts = (products, cat) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      items:
        cat === ""
          ? products
          : products.filter(
              a => a.categories.indexOf(cat.toLowerCase()) >= 0
            ),
      cat: cat
    }
  });
};