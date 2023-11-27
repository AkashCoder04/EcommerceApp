import {takeEvery,put} from 'redux-saga/effects'
import {ADD_SUBCATEGORY_RED,ADD_SUBCATEGORY,GET_SUBCATEGORY,GET_SUBCATEGORY_RED,DELETE_SUBCATEGORY_RED,DELETE_SUBCATEGORY ,UPDATE_SUBCATEGORY_RED,UPDATE_SUBCATEGORY} from '../Constants'
import {addSubcategoryAPI,getSubcategoryAPI ,deleteSubcategoryAPI,updateSubcategoryAPI} from '../Services'

function* getSubcategorySaga( ) {
    var result = yield getSubcategoryAPI()
    yield put({type:GET_SUBCATEGORY_RED,data:result, result:"Done"})
}



function* createSubcategorySaga(data){// executer
   var result = yield addSubcategoryAPI(data)
    yield put({type:ADD_SUBCATEGORY_RED,data:result, result:"Done"})
}


function* updateSubcategorySaga(data){// executer
    yield updateSubcategoryAPI(data.payload)
      yield put({type:UPDATE_SUBCATEGORY_RED, result:"Done",data:data.payload})
    }

function* deleteSubcategorySaga(data){
     yield deleteSubcategoryAPI(data)
    yield put({type:DELETE_SUBCATEGORY_RED, result:"Done",data:data.payload})
}


export default function* subcategorySaga(){//watcher
    yield takeEvery(ADD_SUBCATEGORY,createSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY,getSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSubcategorySaga) 
}  