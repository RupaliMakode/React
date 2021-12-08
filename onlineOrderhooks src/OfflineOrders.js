import { useState } from "react";
import withOrders from "./withOrders";
const OfflineOrders=(props)=>{
    console.log(props);

    const status =["Order Place","Preparing","Serving","Bill Payment"];
  const[value,setValue]=useState(0);

    // const onClickHandler =() =>{
    //     setValue(value+1);
    // };
 return(
     <>
     <h1>Offline Orders</h1>
     <div>Current Status:{status[props.value]}</div>
     <button onClick={props.onClickHandler}>Next Status</button>
     </>
 );
};

export default withOrders(OfflineOrders);