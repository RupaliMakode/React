import React,{ Component } from "react";
import { connect } from "react-redux";

 class CourseForm extends Component{
    state={
        course_name:"",
        price:0,
    };
    onValueChangeHandler=(event)=>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    };
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.addCourse(this.state);
    };

  render(){
     return(
     <>
     <h1>In CourseForm</h1>
     <form onSubmit={this.onFormSubmitHandler}>
     <div class="mb-3"></div>
         <label>Course_Name:</label>
         <input
          className="form-label"
         name={'course_name'}
         value={this.state. course_name}
         onChange={this.onValueChangeHandler}
         />
        <br/>
        <label>Course_Price:</label>
         <input
          className="form-label"
         name={'price'}
         value={this.state.price}
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
 addCourse:(payload)=>dispatch({type:"COURSE_ADD",payload:payload})
    };
};
export default connect( mapStateToProps,mapDispatchToProps)(CourseForm)