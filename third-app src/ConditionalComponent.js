import { Component } from "react";

class ConditionalComponent extends Component{
    state={
         ShowText:true,
    };
    onToggleShowText = () => {
        this.setState({ShowText:!this.state.ShowText})
    }
   
    render(){
        return(
            <>
            {this.state.ShowText && <h1> From Conditional Component</h1>}
            <button onClick={this.onToggleShowText}>{this.state.ShowText ? "Hide" : "show"}</button>
            </>
        );
    }
}
export default ConditionalComponent;