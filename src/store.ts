import { RematchRootState, init } from '@rematch/core';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import selectPlugin from '@rematch/select';

import { history } from './history';
import { productsModel } from './products.model';

const models = { productsModel };
const selectors = selectPlugin();
export const store = init({
  models,
  plugins: [selectors],
  redux: {
    reducers: {
      router: routerReducer,
    },
    middlewares: [routerMiddleware(history)],
  },
});
export const { select } = store;

export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;
