import React,{Component} from "react";
import { connect } from "react-redux";

class CourseList extends Component{
    
    render(){
        console.log(this.props.courseList);
        return(
         <>
            <h1>Course List</h1>
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Course_List</th>
                        <th>Price</th>
                        <th>Options</th>
                    </tr>
                </thead>
          <tbody>
            {this.props.courseList.map((course,index)=>{
              return(
                <tr key={index}>
                <td>{index +1}</td>
                <td>{course.course_name}</td>
                <td>{course.price}</td>
                 <td>
                 <button  className="btn btn-danger"
                    onClick={()=>{
                     this.props.deleteCourseByIndex(index);
                     }} 
                     >
                     -
                </button>
                </td>
                </tr>
                  );
            })} 
          </tbody>
      </table>
            </>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        courseList:state.courseList,
  };
};

const mapDispatchToProps=(dispatch)=>{
 return{
    deleteCourseByIndex:(index)=>
    dispatch({type:"COURSE_DELETE",payload:index}),
 };
};

export default connect( mapStateToProps,mapDispatchToProps)(CourseList)