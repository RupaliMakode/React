import React ,{Component} from "react";
export default class Accessibility extends Component{
    onButtonClickHandler=()=>{
        console.log("Button Clicked");

    };
    render(){
        return(
            <>
            <h1>I am inde Accessibility</h1>
            <lable htmlFor="name">Name</lable>
            <br/>
            <input
            id="name"
            />
            <br/>
            <button onClick={this.onButtonClickHandler}>
                Click Me
            </button>
            {/* name={"name"}
            placeholder="please enter your name"
            aria-label="name"
            aria-required="true"
     */}
             <br/>
             <table>
                 <tbody>
                     <tr>
                         <td>Rupali</td>
                         <td>Sahiti</td>
                     </tr>
                 </tbody>
             </table>
            </>
        );
    }
}