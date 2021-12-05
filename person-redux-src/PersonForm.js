import React,{ Component } from "react";
import { connect } from "react-redux";

 class PersonForm extends Component{
    state={
        name:"",
        age:0,
    };
    onValueChangeHandler=(event)=>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    };
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.addPerson(this.state);
    };

  render(){
     return(<>
     <h1>In PersonForm</h1>
     <form onSubmit={this.onFormSubmitHandler}>
     <div class="mb-3"></div>
         <label>Name:</label>
         <input
          className="form-label"
         name={'name'}
         value={this.state.name}
         onChange={this.onValueChangeHandler}
         />
        <br/>
        <label>Age:</label>
         <input
          className="form-label"
         name={'age'}
         value={this.state.age}
         onChange={this.onValueChangeHandler}
         />
         <br/>
         <button className="btn btn-success" type="submit">
             Submit
             </button>
     </form>
     </>
     
     ) ;
 }

}
const mapStateToProps=(state)=>{
    return{};
};

const mapDispatchToProps=(dispatch)=>{
    return{
 addPerson:(payload)=>dispatch({type:"PERSON_ADD",payload:payload})
    };
};
export default connect( mapStateToProps, mapDispatchToProps)(PersonForm)