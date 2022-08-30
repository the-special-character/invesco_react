import axiosInstance from '../utils/axiosInstance';

export const addCartItemAction =
  product => async dispatch => {
    try {
      dispatch({
        type: 'ADD_CART_ITEM_REQUEST',
        loadingId: product.id,
      });
      const res = await axiosInstance.post('cart', {
        productId: product.id,
        quantity: 1,
      });
      dispatch({
        type: 'ADD_CART_ITEM_SUCCESS',
        payload: res.data,
        loadingId: product.id,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_CART_ITEM_FAILURE',
        payload: {
          title: 'Add Cart Fail',
          message: error?.message || error?.response?.data,
        },
        loadingId: product.id,
      });
    }
  };

export const updateCartItemAction =
  cart => async dispatch => {
    try {
      dispatch({
        type: 'UPDATE_CART_ITEM_REQUEST',
        loadingId: cart.productId,
      });
      const res = await axiosInstance.put(
        `cart/${cart.id}`,
        cart,
      );
      dispatch({
        type: 'UPDATE_CART_ITEM_SUCCESS',
        payload: res.data,
        loadingId: cart.productId,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_CART_ITEM_FAILURE',
        payload: {
          title: 'Update Cart Fail',
          message: error?.message || error?.response?.data,
        },
        loadingId: cart.productId,
      });
    }
  };

export const deleteCartItemAction =
  cart => async dispatch => {
    try {
      dispatch({
        type: 'DELETE_CART_ITEM_REQUEST',
        loadingId: cart.productId,
      });
      await axiosInstance.delete(`cart/${cart.id}`);
      dispatch({
        type: 'DELETE_CART_ITEM_SUCCESS',
        payload: cart,
        loadingId: cart.productId,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_CART_ITEM_FAILURE',
        payload: {
          title: 'Delete Cart Fail',
          message: error?.message || error?.response?.data,
        },
        loadingId: cart.productId,
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
      payload: {
        title: 'Load Cart Fail',
        message: error?.message || error?.response?.data,
      },
    });
  }
};
