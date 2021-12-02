import React,{Component} from "react";
import UserB from "./UserB";
export default class UserA extends Component{
    render(){
        return(<> <h2> Hi from User A</h2>
        
                 <UserB/>
        </>
        )
    }

}
