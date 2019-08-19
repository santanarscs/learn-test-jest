import { all } from 'redux-saga/effects';

import tool from './tools/sagas';

export default function* rootSaga() {
  return yield all([tool]);
}
