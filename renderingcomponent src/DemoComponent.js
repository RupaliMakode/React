import React from "react"

export default () => {
    // return (
        // <div>                          //parent component
        // <h1  style={{backgroundColor :"lightcyan"}}>
        //     In DemoComponent</h1>         //1st chlid
        // <h2  style={{backgroundColor:"lightyellow"}}>
        //     In DemoComponent</h2>         //2nd chlid   
        // // </div>
        // );
    // return React.createElement("h1",null,"In DemoComponent");
   //passing inner HTML

    return React.createElement(
        "div",
        null,
 React.createElement(
     "h1",{style :{backgroundColor : "lightcyan"}}
 ,"In DemoComponent"),
 React.createElement(
     "h2",{style :{backgroundColor : "lightyellow"}},"In DemoComponent"),
 //passing chlid nodes
    );
};