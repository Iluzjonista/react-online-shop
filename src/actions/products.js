import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_NAME,
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_ID,
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

export const filterProduct = (products, name) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_NAME,
    payload: {
      items:
        name === ""
          ? products
          : products.filter(
              a => a.categories.indexOf(name.toLowerCase()) >= 0
            ),
      name: name
    }
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

export const filterSingle = (products, id) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_ID,
    payload: {
      items:
          id === ""
              ? products
              : products.filter(
              a => a.id.indexOf(id) >= 0
              ),
      id: id
    }
  });
};