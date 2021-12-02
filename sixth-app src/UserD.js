import React,{Component} from "react";
import { UserConsumer } from "./UserContext";
export default class UserD extends Component{
    render(){
        return (
        <>
        <h2> Hi from User D</h2>
        <UserConsumer>
            {(value)=>{
                return(
                    
                    <h4>
                        User Name: {value.username} <br/>
                        Password: {value.password} <br/>
                        User ID: {value.userid} <br/>
                        Age:{value.age}<br/>
                        Last LoggedIn: {value.lastlogin}<br/>
                        Address:{value.currentAddress}
                    
                    </h4>
                    
                );
            }}
        </UserConsumer>
        </>
        );
    }
    
}