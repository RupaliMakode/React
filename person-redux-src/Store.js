import {createStore } from "redux";

//inital state
const initialState={
   personList:[],
   courseList:[],
};

//Reducer
const reducer =(state = initialState,action)=>{
    const{type,payload}=action;
    const personListCopy =[...state.personList];
    const courseListCopy =[...state.courseList]
    switch (type){
        case "PERSON_ADD":
            personListCopy.push(payload);
          return{
              ...state,
            personList:personListCopy,
          };
            
            case "PERSON_DELETE":
           personListCopy.splice(payload,1);
            alert("Deleted");
            return{
                ...state,
                personList:personListCopy,
            };

            case"COURSE_ADD":
           courseListCopy.push(payload);
         return{
            ...state,
         courseList:courseListCopy,
         };

         case"COURSE_DELETE":
         courseListCopy.splice(payload,1);
         alert("Deleted");
         return{
            ...state,
             courseList:courseListCopy,
         };
          default:
          return state;
     };
};




    

//store
const store = createStore(reducer);
 
export default store;
