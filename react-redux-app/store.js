import {createStore } from "redux";

//inital state
const initialState={
    counter:0,
};

//Reducer
const reducer =(state = initialState,action)=>{
    const{type,value}=action;
    switch (type){
        case "increment":
            return{
                counter:state.counter+value,
            };
            case "decrement":
            return{
                counter:state.counter-value,
            };
            case "multiplication":
            return{
                counter:state.counter*value,
            };
            case "division":
            return{
                counter:state.counter/value,
            };
            default:
                return state;

    }
    
};


//store
const store = createStore(reducer);
 
export default store;

