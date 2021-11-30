import React , { Component } from "react";

class MySecondClassComponent extends Component{
    state={
        balance:0,
    }
    render(){
        const{ name,age}=this.props;
        return(  
        <h1> 
            Hello i am {name} ,{age} years old and 
            my Account balance is {" "}
            {this.state.balance} 
        </h1>
        );
    }
}
export default MySecondClassComponent;
