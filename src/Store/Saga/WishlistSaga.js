import {takeEvery,put} from 'redux-saga/effects'
import {ADD_WISHLIST_RED,ADD_WISHLIST,GET_WISHLIST,GET_WISHLIST_RED,DELETE_WISHLIST_RED,DELETE_WISHLIST} from '../Constants'
import {addWishlistAPI,getWishlistAPI ,deleteWishlistAPI} from '../Services'

function* getWishlistSaga( ) {
    var result = yield getWishlistAPI()
    yield put({type:GET_WISHLIST_RED,data:result, result:"Done"})
}

 

function* createWishlistSaga(data){// executer
    var result = yield addWishlistAPI(data)
    yield put({type:ADD_WISHLIST_RED,data:result, result:"Done"})
}


function* deleteWishlistSaga(data){
    yield deleteWishlistAPI(data)
    yield put({type:DELETE_WISHLIST_RED, result:"Done",data:data.payload})
}


export default function* wishlistSaga(){//watcher
    yield takeEvery(ADD_WISHLIST,createWishlistSaga)
    yield takeEvery(GET_WISHLIST,getWishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
  
}  