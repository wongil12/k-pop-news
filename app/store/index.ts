import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { Tuple, configureStore } from '@reduxjs/toolkit';
import { rootReducers } from '@@store/reducers';
import { rootSagas } from '@@store/sagas';
import { actionMiddleware } from '@@store//middlewares/actionMiddleware';

const createStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const middlewares = [actionMiddleware, sagaMiddleWare];

  const store = configureStore({
    reducer: rootReducers,
    middleware: () => new Tuple(...middlewares, logger),
  });

  sagaMiddleWare.run(rootSagas);

  return store;
};

export const store = createStore();

export const { dispatch } = store;
