import React,{Component} from "react";
import ChlidComponent from "./ChlidComponent";
 export default class ParentComponent extends Component{
   state={
     balance:0,
   };
   onProfit =()=>{
    this.setState({balance:this.state.balance + 1}
    );
   }
render(){
    
    return (
    <>
    <h1>Parent:{this.state.balance}</h1>
    <button onClick={this.onProfit}>
        Family profit
    </button>
<ChlidComponent name={"Hrithika"} onProfit={this.onProfit}  />
<ChlidComponent name={"Pradynesh"} onProfit={this.onProfit}  />



</> 
    );
}
}