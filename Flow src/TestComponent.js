
// import React, { Component } from 'react';
var createReactClass = require(" create-react-class");

//  class TestComponent extends Component {
//    render() {
//        <>
//       <h1>In TestComponent {this.props.name}</h1>
//       </>
//      }
//  }

var TestComponent =  createReactClass({
    render:function (){
        return (
         <>
        <h1> In TestComponent with old way:{this.props.name}</h1>
        count:{this.props.count}
        <br/>
        <button onClick={this.onClickHandler}>Increment</button>
        </>
     );
 }, 
 getInitialState:function (){
     return{
         count:0,
     };
 },

 onClickHandler :function(){
     this.setState({count:this.this.state.count + 1})
 },

})

export default TestComponent;
