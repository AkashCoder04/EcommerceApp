import {ADD_CART,GET_CART,DELETE_CART,UPDATE_CART} from '../Constants'

export function getCart(){
    return {
        type:GET_CART
        
    }
}
export function addCart(data){
    return {
        type:ADD_CART,
        payload:data
    }
}
export function deleteCart(data){
    return {
        type:DELETE_CART,
        payload:data
    }
}
export function updateCart(data){
    return {
        type:UPDATE_CART,
        payload:data
    }
}
