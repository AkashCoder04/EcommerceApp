import {ADD_MAINCATEGORY,GET_MAINCATEGORY,DELETE_MAINCATEGORY,UPDATE_MAINCATEGORY} from '../Constants'

export function getMaincategory(){
    return {
        type:GET_MAINCATEGORY
        
    }
}
export function addMaincategory(data){
    return {
        type:ADD_MAINCATEGORY,
        payload:data
    }
}
export function deleteMaincategory(data){
    return {
        type:DELETE_MAINCATEGORY,
        payload:data
    }
}
export function updateMaincategory(data){
    return {
        type:UPDATE_MAINCATEGORY,
        payload:data
    }
}
