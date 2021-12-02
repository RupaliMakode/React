import  React,{ Component } from "react";
import { PersonConsumer } from "./PersonContext";



export default class ContextConsumerChild extends Component{
    render(){
        return(
            <>
            <h1> In ContextConsumerChild</h1>
          <PersonConsumer>
                {(value)=>{
                    return(
                        <h2>
                            The Latest value in Context
                            is name is{value.name}
                            and age is{""}
                            {value.age}{""}
                        </h2>
                    );
                }}
         </PersonConsumer>
            </>
        );
    }
}
