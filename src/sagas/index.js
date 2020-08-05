import {
  all
} from 'redux-saga/effects';


import { loginSaga } from './login';
import { productsSaga } from './products';


export default function* rootSaga() {
  yield all([
    ...productsSaga,
    ...loginSaga

  ])
}
