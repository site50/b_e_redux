import {call, put, takeEvery} from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS} from  './actions';

function usersFetch(){
return fetch('http://localhost:3005/cats').then(response=>response.json())
}

function* workGetUsersFetch(){
const users=yield call (usersFetch);
yield put({type:GET_USERS_SUCCESS, users})
}

function* mySaga(){
yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}
 export default mySaga;

 //Generator functions