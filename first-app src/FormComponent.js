import React,{Component} from "react";
export default class FormComponent extends Component{
    state={
        firstname:"",
        age:0,
    };
    // onNameChangeHandler =(event) =>{
    //     console.log(event.target.name);
    //     this.setState({[event.target.name]:event.target.value});
    // }
  
    // onAgeChangeHandler =(event) =>{
    //     console.log(event.target.value);
    //     this.setState({age:event.target.value});
    // }
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
       console.log("in onsumbit");
       console.log(this.state);
    }
    onValueChangeHandler =(event) =>{
        console.log(event.target.name);
        this.setState({[event.target.name]:event.target.value});
    }
    render(){
        return(
        <>
        <h1> Form App</h1>
        <h1>Person Form</h1>
        <form onSubmit ={this.onFormSubmitHandler}>
            <label>Name:</label>
             <input
             name={"firstname"}
             value={this.state.firstname}
             onChange={this.onValueChangeHandler}
             />
             <br/>
             <label>Age:</label>
             <input 
             name={"age"}
             value={this.state.age}
             onChange={this.onValueChangeHandler}/>
             <br/>
             <button type={"Sumbit"}>Sumbit</button>
        </form>
        
        </>
        );
    }
}