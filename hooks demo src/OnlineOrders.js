import { useState } from "react";
import withOrders from "./withOrders";

const OnlineOrders= (props)=>{
 console.log(props);
    const status=[
        "Order Placed",
        "Pending",
        "Preparing",
        "Out of Delivery",
        "Delivered",
];

// const [value,setValue]= useState(0);

//  const onClickHandler =()=> {
//     setValue(value  + 1);
// };

 return(
     <>
     <h1>Online Orders</h1>
     <div>Current Status:{status[props.value]}</div>
     <button onClick={props.onClickHandler}> Next Status</button>
     </>
 );
};
 export default withOrders(OnlineOrders);