const initialstate={
    cart:{}
}

const CartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "SET_CART":
            return{cart: action.payload}
        default:
            return state
    }
}

export default CartReducer