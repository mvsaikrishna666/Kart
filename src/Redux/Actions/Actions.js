import {SET_CART} from'./Actiontypes'



export const setcartaction=(cart)=>{
    return{
        type:SET_CART,
        payload:cart,
    }
}