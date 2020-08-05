import {
    call,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects';

import {loginResult} from '../actions/login';
import {LOGIN} from '../constants/login';
import api from '../utils/api';

export function* login() {
    try {
        const data = yield select(state => state.login.loginData);
        const apiData = yield call(api.auth.login, data);

        if(apiData){
            if(apiData.length){
                localStorage.setItem("userData", apiData.data);  
            } 

            //if(apiData.success.data) localStorage.setItem('userData',JSON.stringify(apiData.success.data))
        yield put(loginResult(apiData.data));

        } 

    } catch (err) {
        console.log(err);
    }
}



export const loginSaga = [
    takeLatest(LOGIN, login),
];
