import {takeEvery,put} from 'redux-saga/effects'
import {ADD_CHECKOUT_RED,ADD_CHECKOUT,GET_CHECKOUT,GET_CHECKOUT_RED,DELETE_CHECKOUT_RED,DELETE_CHECKOUT ,UPDATE_CHECKOUT_RED,UPDATE_CHECKOUT} from '../Constants'
import {addCheckoutAPI,getCheckoutAPI ,deleteCheckoutAPI,updateCheckoutAPI} from '../Services'

function* getCheckoutSaga( ) {
    var result = yield getCheckoutAPI()
    yield put({type:GET_CHECKOUT_RED,data:result, result:"Done"})
}

 

function* createCheckoutSaga(data){// executer
    var result = yield addCheckoutAPI(data)
    yield put({type:ADD_CHECKOUT_RED,data:result, result:"Done"})
}

function* updateCheckoutSaga(data){// executer
   yield updateCheckoutAPI(data.payload)
      yield put({type:UPDATE_CHECKOUT_RED, result:"Done",data:data.payload})
    }

function* deleteCheckoutSaga(data){
    yield deleteCheckoutAPI(data)
    yield put({type:DELETE_CHECKOUT_RED, result:"Done",data:data.payload})
}


export default function* checkoutSaga(){//watcher
    yield takeEvery(ADD_CHECKOUT,createCheckoutSaga)
    yield takeEvery(GET_CHECKOUT,getCheckoutSaga)
    yield takeEvery(DELETE_CHECKOUT,deleteCheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT,updateCheckoutSaga) 
}  