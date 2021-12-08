import { useState } from "react";


export default () => {
const [value,setValue] = useState(0);
const[newValue,setnewValue] = useState(0);

// const onClickHandler = () => {
// setValue(value+1);
// };
const onUpdaedClickHandler = () => {
    setValue(value+1);
    };
    const onUpdatedNewValueClickHandler = () => {
        setnewValue(newValue+1);
        };
        
    
// const onDecrementClickHandler = () => {
// setValue(value-1);
// };

return (
<>
<h1>value : {value}</h1>
<h1>New Value :{newValue}</h1>
{/* <button onClick={onClickHandler}>Increment</button>
<button onClick={onDecrementClickHandler}>Decrement</button> */}
<button onClick={onUpdaedClickHandler}>Upadted</button>
<button onClick={onUpdatedNewValueClickHandler}>Upadte New Value Set</button>
</>
);
};
