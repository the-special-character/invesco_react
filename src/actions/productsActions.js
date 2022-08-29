import axiosInstance from '../utils/axiosInstance';

export const loadProductsAction = () => async dispatch => {
  try {
    dispatch({
      type: 'LOAD_PRODUCTS_REQUEST',
      payload: true,
    });
    const res = await axiosInstance.get('products');
    dispatch({
      type: 'LOAD_PRODUCTS_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'LOAD_PRODUCTS_FAILURE',
      payload: error?.message || error?.response?.data,
    });
  }
};

export const a = 1;
