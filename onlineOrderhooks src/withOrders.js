import { useState } from "react";
export default (WrappredComponent)=>{
    //return TestComponent
    return()=>{
     const [value,setValue]= useState(0);

 const onClickHandler =()=> {
    setValue(value  + 1);
};
return <WrappredComponent value={value} onClickHandler={onClickHandler}/>;
};
}

// const TestComponent=()=>{
//     return <h1> I am in Test Component</h1>
// };