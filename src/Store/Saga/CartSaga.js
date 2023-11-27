import {takeEvery,put} from 'redux-saga/effects'
import {ADD_CART_RED,ADD_CART,GET_CART,GET_CART_RED,DELETE_CART_RED,DELETE_CART ,UPDATE_CART_RED,UPDATE_CART} from '../Constants'
import {addCartAPI,getCartAPI ,deleteCartAPI,updateCartAPI} from '../Services'

function* getCartSaga( ) {
    var result = yield getCartAPI()
    yield put({type:GET_CART_RED,data:result, result:"Done"})
}

 

function* createCartSaga(data){// executer
    var result = yield addCartAPI(data)
    yield put({type:ADD_CART_RED,data:result, result:"Done"})
}

function* updateCartSaga(data){// executer
   yield updateCartAPI(data.payload)
      yield put({type:UPDATE_CART_RED, result:"Done",data:data.payload})
    }

function* deleteCartSaga(data){
    yield deleteCartAPI(data)
    yield put({type:DELETE_CART_RED, result:"Done",data:data.payload})
}


export default function* cartSaga(){//watcher
    yield takeEvery(ADD_CART,createCartSaga)
    yield takeEvery(GET_CART,getCartSaga)
    yield takeEvery(DELETE_CART,deleteCartSaga)
    yield takeEvery(UPDATE_CART,updateCartSaga) 
}  