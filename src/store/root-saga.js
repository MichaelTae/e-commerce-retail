import { all, call } from 'redux-saga/effects';
import { categoriesSagas } from './categories/categories.saga';
export function* rootSaga() {
  yield all([call(categoriesSagas)]);
}
