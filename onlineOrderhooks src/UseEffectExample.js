import useMyLog from "./useMyLog";
import { useEffect ,useState }from "react";
import useUserStatus from "./useUserStatus";


export default()=>{
    const [value,setValue]= useState(0);
    const [newValue,setNewValue]= useState(0);
    // useMyLog(value);
    // useMyLog(newValue);

    const userStatus = useUserStatus(value);
    const userNewStatus = useUserStatus(newValue);

    const onClickHandler =()=>{
        setValue(value + 1);
    };

    const onNewValueClickHandler =()=>{
        setNewValue(newValue + 1);
    };
   /* ------------------------*/
    //execute only  once after Component is rendered
    // useEffect(()=>{
    //     console.log("rendered");                           
    // },[]);

/*----------------------------*/
//Execute everytime after component is rendered/updated
    //  useEffect(()=>{
    //     console.log("rendered");                             
    // });

/*------------------------------*/
//execute everytime when value will get updated
    // useEffect(()=>{
    //     console.log("Value Updated");                            
    //    return() =>{      
    //        console.log("Clean Up");  //clean up
         //after useeffect the clean up  will updated  in next render 
    //    };                            
    // },[value]);

 return(
     <>
     <h1>Use Effect Example Component</h1>
     <div>Value :{value}</div>
     <div> New Value :{newValue}</div>
    <br/>
     <div>User Status:{userStatus}</div>
     <div>  New User Status:{userNewStatus}</div>

     <br/>
     <br/>
      <button onClick={onClickHandler}>
      Click Me
     </button>
     <br/>
     <br/>
     <button onClick={onNewValueClickHandler}>
      Click Me To Upadte New Value
     </button>
     </>
 );
};