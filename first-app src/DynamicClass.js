import React,{ Component } from "react";

export default class DynamicClass extends Component{
    state={
        isTrue:true,
        colorList:["red","yellow","blue","green","black","orange"],
        incrementer:0,
    };
    onClickHandler =()=>{
      this.setState({isTrue: !this.state.isTrue});
    };
    onUpdateClickHandler=()=>{
        console.log(" In Handler");
        console.log((this.state.incrementer +1)%5);
        this.setState({ incrementer:(this.state.incrementer +1)%5});
    };
render(){
return(
    <>
    <h1> In DynamicClass</h1>
    {/* <div className ={this.state.isTrue  ?"my-true-div" :"my-false-div"}>
     In div with {this.state.isTrue ? "true":"false"} Condition 
    </div> */}
     <div style=
     {{backgroundColor:this.state.colorList[this.state.incrementer],
     }}
     >
         In DynamicClass style div
         </div>   
    {/* <button onClick={this.onClickHandler}>Toggle</button> */}
    <button onClick={this.onUpdateClickHandler}>Upadte</button>
    </>
   
    );
    }
}
