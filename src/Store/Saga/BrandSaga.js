import {takeEvery,put} from 'redux-saga/effects'
import {ADD_BRAND_RED,ADD_BRAND,GET_BRAND,GET_BRAND_RED,DELETE_BRAND_RED,DELETE_BRAND ,UPDATE_BRAND_RED,UPDATE_BRAND} from '../Constants'
import {addBrandAPI,getBrandAPI ,deleteBrandAPI,updateBrandAPI} from '../Services'

function* getBrandSaga( ) {
    var result = yield getBrandAPI()
    yield put({type:GET_BRAND_RED,data:result, result:"Done"})
}

 

function* createBrandSaga(data){// executer
    var result = yield addBrandAPI(data)
    yield put({type:ADD_BRAND_RED,data:result, result:"Done"})
}

function* updateBrandSaga(data){// executer
   yield updateBrandAPI(data.payload)
      yield put({type:UPDATE_BRAND_RED, result:"Done",data:data.payload})
    }

function* deleteBrandSaga(data){
    yield deleteBrandAPI(data)
    yield put({type:DELETE_BRAND_RED, result:"Done",data:data.payload})
}


export default function* brandSaga(){//watcher
    yield takeEvery(ADD_BRAND,createBrandSaga)
    yield takeEvery(GET_BRAND,getBrandSaga)
    yield takeEvery(DELETE_BRAND,deleteBrandSaga)
    yield takeEvery(UPDATE_BRAND,updateBrandSaga) 
}  