import {
  all,
  call,
  delay,
  fork,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadProducts() {
  try {
    yield delay(1000);
    const res = yield call(axiosInstance.get, 'products');
    yield put({
      type: 'LOAD_PRODUCTS_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: 'LOAD_PRODUCTS_FAILURE',
      payload: {
        title: 'Load Product Fail',
        message: error?.message || error?.response?.data,
      },
    });
  }
}

function* loadProductsRequest() {
  yield takeEvery('LOAD_PRODUCTS_REQUEST', loadProducts);
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest)]);
}
