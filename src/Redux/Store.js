import {createStore, combineReducers} from 'redux'
import CartReducer from './Reducers/CartReducer'
const savetolocal=(state)=>{
    try{
            const serializedState=JSON.stringify(state)
            localStorage.setItem('state',serializedState)
    }catch(e){
        console.log(e)
    }
}

const loadfromlocal=()=>{
    try{
        const serializedState=localStorage.getItem('state')
        if(serializedState==null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}
const persistedState=loadfromlocal()

const rootReducer = combineReducers({cart:CartReducer})

const store=createStore(rootReducer,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>savetolocal(store.getState()))

export default store