import axiosInstance from '../utils/axiosInstance';

export const addCartItemAction =
  product => async dispatch => {
    try {
      dispatch({
        type: 'ADD_CART_ITEM_REQUEST',
        payload: true,
      });
      const res = await axiosInstance.post('cart', {
        productId: product.id,
        quantity: 1,
      });
      dispatch({
        type: 'ADD_CART_ITEM_SUCCESS',
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_CART_ITEM_FAILURE',
        payload: error?.message || error?.response?.data,
      });
    }
  };

export const updateCartItemAction =
  cart => async dispatch => {
    try {
      dispatch({
        type: 'UPDATE_CART_ITEM_REQUEST',
        payload: true,
      });
      const res = await axiosInstance.put(
        `cart/${cart.id}`,
        cart,
      );
      dispatch({
        type: 'UPDATE_CART_ITEM_SUCCESS',
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_CART_ITEM_FAILURE',
        payload: error?.message || error?.response?.data,
      });
    }
  };

export const deleteCartItemAction =
  cart => async dispatch => {
    try {
      dispatch({
        type: 'DELETE_CART_ITEM_REQUEST',
        payload: true,
      });
      await axiosInstance.delete(`cart/${cart.id}`);
      dispatch({
        type: 'DELETE_CART_ITEM_SUCCESS',
        payload: cart,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_CART_ITEM_FAILURE',
        payload: error?.message || error?.response?.data,
      });
    }
  };

export const loadCartAction = () => async dispatch => {
  try {
    dispatch({
      type: 'LOAD_CART_REQUEST',
      payload: true,
    });
    const res = await axiosInstance.get('cart');
    dispatch({
      type: 'LOAD_CART_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'LOAD_CART_FAILURE',
      payload: error?.message || error?.response?.data,
    });
  }
};
