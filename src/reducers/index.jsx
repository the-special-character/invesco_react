import { combineReducers } from '@reduxjs/toolkit';
import cart from './cartReducer';
import products from './productsReducer';
import errors from './errorReducer';
import loading from './loadingReducer';

export default combineReducers({
  cart,
  products,
  errors,
  loading,
});
