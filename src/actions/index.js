import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./type";
import { commerce } from '../lib/commerce';

export const fetchProducts = () => async dispatch => {
  const response = await commerce.products.list();
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
}

export const fetchProduct = id => async dispatch => {
  const response = await commerce.products.retrieve(id);
  dispatch({ type: FETCH_PRODUCT, payload: response.data });
}