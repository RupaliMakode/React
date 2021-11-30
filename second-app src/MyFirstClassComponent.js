// import React , { Component } from "react";

// class MyFirstClassComponent extends Component{
//     state={
//         balance:50000,
//     };
//     balanceIncrement = (value)=>{
//         this.setState({balance:this.state.balance + value}
//       );
//     }
//     onProfitClickHandler=() =>{
//      console.log ("I am Clicked now")
//      this.balanceIncrement(1);
//     //  this.setState({
//     //      balance:this.state.balance 
//     //  });
//     // Internally 
//     // this.state={...this.state.balance+100,
//     // });
//     };
//     onDoubleProfitsClickHandler=()=>{
//         console.log("I am Clicked now")
//         this.balanceIncrement(100);
//     };
    

//     render(){
//         const{ name, age}=this.props;
//         return(  
//         <>
//         <h1> 
//             Hello i am {name} ,{age} years old and 
//             my  Account balance is {this.state.balance} 
//             in account {this.props.accountNumber}
            
//         </h1>
//         <button onClick ={this.onProfitClickHandler}>
//             profit
//         </button>
//         <button onClick ={this.onDoubleProfitsClickHandler}>
//           DoubleProfit
//         </button>
//         </>
//         );
      
//     }

// }
// export default MyFirstClassComponent;


import React ,{Component} from "react";
class MyFirstClassComponent extends Component{
    state = {
 balance:50000,
 };
 balanceIncrement = (value)=>{
 this.setState({balance:this.state.balance + value}
     );
  }
  render(){
    const{ name}=this.props;
    return (
  <>
  <h1>In Parent</h1>
  <h1>In Chlid</h1>
  <h1>In Chlid</h1>
  <h1> 
        Hello i am {name} 
        my  Account balance is {this.state.balance}
  </h1>
  <button onClick ={this.onProfitClickHandler}>
      </button> 

   </>
    );
  }

}
 export default MyFirstClassComponent;
