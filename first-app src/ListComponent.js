import React,  { Component } from "react";

export default class ListComponent extends Component{
    state={
        myList:[],
         inputvalue:"",
    };
    onAdd=()=>{
        const myListCopy=this.state.myList;
        myListCopy.push(this.state.inputvalue);
        this.setState({myList:myListCopy ,inputvalue:""});
        // console.log("onAdd");
    };
    onInputTextChange =(event) =>{
        console.log(event.target.value);
        this.setState({inputvalue:event.target.value});
    }

    render(){
        
        return(
            <>
            <h1>My ToDo  List App</h1>
            <input 
            value={this.state.inputvalue}
            onChange={this.onInputTextChange}
            />
            <button onClick={this.onAdd}>Add</button>

            {this.state.myList.map((element,index)=>(
            
                <div key={index}>
               
                <div>{element}</div>
                </div>
            )
            )}
            </>
        );
    }
}