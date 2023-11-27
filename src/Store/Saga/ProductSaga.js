import {takeEvery,put} from 'redux-saga/effects'
import {ADD_PRODUCT_RED,ADD_PRODUCT,GET_PRODUCT,GET_PRODUCT_RED,DELETE_PRODUCT_RED,DELETE_PRODUCT ,UPDATE_PRODUCT_RED,UPDATE_PRODUCT} from '../Constants'
import {addProductAPI,getProductAPI ,deleteProductAPI,updateProductAPI} from '../Services'

function* getProductSaga( ) {
    var result = yield getProductAPI()
    yield put({type:GET_PRODUCT_RED,data:result, result:"Done"})
}

 

function* createProductSaga(data){// executer
    var result = yield addProductAPI(data)
    yield put({type:ADD_PRODUCT_RED,data:result, result:"Done"})
}

function* updateProductSaga(data){// executer
   yield updateProductAPI(data.payload)
      yield put({type:UPDATE_PRODUCT_RED, result:"Done",data:data.payload})
    }

function* deleteProductSaga(data){
    yield deleteProductAPI(data)
    yield put({type:DELETE_PRODUCT_RED, result:"Done",data:data.payload})
}


export default function* productSaga(){//watcher
    yield takeEvery(ADD_PRODUCT,createProductSaga)
    yield takeEvery(GET_PRODUCT,getProductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteProductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateProductSaga) 
}  