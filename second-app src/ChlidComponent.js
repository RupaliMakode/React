import React,{Component} from "react";
 export default class ChlidComponent extends Component{
render(){
    const{name,onProfit}=this.props
    
    return (
    <>
    <h1> {name }</h1>
    <button onClick={onProfit}>
    profit
</button>
    
    </>
    );
}
}
