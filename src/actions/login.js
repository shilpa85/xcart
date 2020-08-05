import {
    LOGIN,
    LOGIN_RESULT,
    CLEAR
} from '../constants/login';


export function login(data) {
    console.log(data);
    return {
        type: LOGIN,
        data,
    };
}


export function loginResult(data) {
    return {
        type: LOGIN_RESULT,
        data,
    };
}



export function clear() {
    return {
        type: CLEAR,
        
    };
}

