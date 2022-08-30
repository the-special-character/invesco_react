import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
// import logger from './middleware/logger';
// import errorHandling from './middleware/errorHandling';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware,
    ],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
