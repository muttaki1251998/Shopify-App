import { FETCH_PRODUCTS } from "./type";
import axios from 'axios';
import { commerce } from '../lib/commerce';

export const fetchProducts = () => {
  return async dispatch => {
    const response = await commerce.products.list();
    dispatch({ type: FETCH_PRODUCTS, pacyload: response.data });
    console.log(response.data);
  }
}