import { CreateStore } from "redux";


//inital state
const initialState={
    counter:0,
};

//Reducer
const reducer =(state = initialState,action)=>{
    return{
        counter:state.counter+1,
    }  
};


//store
const store = redux.createStore(reducer);
 
export default CreateStore;

