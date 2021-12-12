import {  useState } from "react";

export default ()=>{
    const [myArr ,setMyArr] = useState(["a","b","c","d"]);
    const addElemnentHandler =()=>{
        setMyArr (["e",...myArr]);
    };
    return(
        <>
        <h1> In Reconciliation</h1>
        <>
{myArr.map((element)=>{
return <div key={element}>{element}
</div>;
})}
 </>
 <button onClick={addElemnentHandler}>
     Add Element
 </button>
        </>
    )
};