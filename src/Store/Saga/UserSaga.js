import {takeEvery,put} from 'redux-saga/effects'
import {RAGISTER_USER_RED,RAGISTER_USER,GET_USER,GET_SINGLE_USER,GET_SINGLE_USER_RED,GET_USER_RED,DELETE_USER_RED,DELETE_USER ,UPDATE_USER_RED,UPDATE_USER,LOGIN, LOGIN_RED} from '../Constants'
import {addUserAPI,getUserAPI ,getSingleUserAPI ,deleteUserAPI,updateUserAPI} from '../Services'

function* getUserSaga( ) {
    var result = yield getUserAPI()
    yield put({type:GET_USER_RED,data:result, result:"Done"})
}

function* getSingleUserSaga(data) {
    var result = yield getSingleUserAPI(data)
    yield put({type:GET_SINGLE_USER_RED, result:"Done",data:result})
}


function* loginSaga(data) {
    var result = yield getUserAPI()
    var user = result.find((item)=>item.username===data.payload.username && item.password===data.payload.password)
    if(user)
    yield put({type:LOGIN_RED,data:user, result:"Done"})
    else
    yield put({type:LOGIN_RED,message:"Invalid Username or Password", result:"Fail"})
}
 
function* createUserSaga(data){// executer
    var result = yield addUserAPI(data)
    yield put({type:RAGISTER_USER_RED,data:result, result:"Done"})
}

function* updateUserSaga(data){// executer
   yield updateUserAPI(data.payload)
      yield put({type:UPDATE_USER_RED, result:"Done",data:data.payload})
    }

function* deleteUserSaga(data){
    yield deleteUserAPI(data)
    yield put({type:DELETE_USER_RED, result:"Done",data:data.payload})
}


export default function* userSaga(){//watcher
    yield takeEvery(RAGISTER_USER,createUserSaga)
    yield takeEvery(GET_USER,getUserSaga)
    yield takeEvery(GET_SINGLE_USER,getSingleUserSaga)
    yield takeEvery(DELETE_USER,deleteUserSaga)
    yield takeEvery(UPDATE_USER,updateUserSaga) 
    yield takeEvery(LOGIN,loginSaga) 
}  