//import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import RootReducer from './Reducers/RootReducer'

import createSagaMiddleware from '@redux-saga/core'
//const store  = createStore(RootReducer)   
import RootSaga from './Saga/RootSaga'
 
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:RootReducer,
middleware:()=>[sagaMiddleware]
})
export default store
sagaMiddleware.run(RootSaga)