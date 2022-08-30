import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadCart() {
  try {
    const res = yield call(axiosInstance.get, 'cart');
    yield put({
      type: 'LOAD_CART_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: 'LOAD_CART_FAILURE',
      payload: {
        title: 'Load Cart Fail',
        message: error?.message || error?.response?.data,
      },
    });
  }
}

function* addCartItem({ payload }) {
  try {
    const res = yield call(axiosInstance.post, 'cart', {
      productId: payload.id,
      quantity: 1,
    });

    yield put({
      type: 'ADD_CART_ITEM_SUCCESS',
      payload: res.data,
      loadingId: payload.id,
    });
  } catch (error) {
    yield put({
      type: 'ADD_CART_ITEM_FAILURE',
      payload: {
        title: 'Add Cart Fail',
        message: error?.message || error?.response?.data,
      },
      loadingId: payload.id,
    });
  }
}

function* updateCartItem({ payload }) {
  try {
    const res = yield call(
      axiosInstance.put,
      `cart/${payload.id}`,
      payload,
    );
    yield put({
      type: 'UPDATE_CART_ITEM_SUCCESS',
      payload: res.data,
      loadingId: payload.id,
    });
  } catch (error) {
    yield put({
      type: 'UPDATE_CART_ITEM_FAILURE',
      payload: {
        title: 'update Cart Fail',
        message: error?.message || error?.response?.data,
      },
      loadingId: payload.id,
    });
  }
}

function* deleteCartItem({ payload }) {
  try {
    yield call(axiosInstance.delete, `cart/${payload.id}`);
    yield put({
      type: 'DELETE_CART_ITEM_SUCCESS',
      payload,
      loadingId: payload.id,
    });
  } catch (error) {
    yield put({
      type: 'DELETE_CART_ITEM_FAILURE',
      payload: {
        title: 'Delete Cart Fail',
        message: error?.message || error?.response?.data,
      },
      loadingId: payload.id,
    });
  }
}

function* loadCartRequest() {
  yield takeEvery('LOAD_CART_REQUEST', loadCart);
}

function* addCartItemRequest() {
  yield takeLatest('ADD_CART_ITEM_REQUEST', addCartItem);
}

function* updateCartItemRequest() {
  yield takeLatest(
    'UPDATE_CART_ITEM_REQUEST',
    updateCartItem,
  );
}

function* deleteCartItemRequest() {
  yield takeLatest(
    'DELETE_CART_ITEM_REQUEST',
    deleteCartItem,
  );
}

export default function* rootCart() {
  yield all([
    fork(loadCartRequest),
    fork(addCartItemRequest),
    fork(updateCartItemRequest),
    fork(deleteCartItemRequest),
  ]);
}
