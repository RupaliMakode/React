import axios, { Axios } from "axios";
import React,{Component} from "react";
export default class UserComponent extends Component{
    state={
        users:[],
        isEditMode:false,
        userObject:{
            title:"",
            body:"",
            userId:1,
        },
    }
    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" 
        +id).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Deleted");
        });
    };
    onEditClickHandler=(id)=>{
        //get specific object by id from the list
        const editObject= this.state.users.find((user)=>user.id===id);

        //set the object to state.postObject
        this.setState({userObject:editObject, isEditMode: true})
    };
    onCancelClickHandler=(event)=>{
        event.preventDefault();
        this.setState({
            userObject:{
                title:"",
                body:"",
                userId:1,
            },
            isEditMode:false,
        });

    };
    onChangeHandler=(event)=>{
        const{name, value}=event.target;
        const userObjectCopy=this.state.userObject;
        userObjectCopy[name]=value;
        this.setState({userObject:userObjectCopy})
    }
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if(this.state.isEditMode){
            //edit
            axios.put("https://jsonplaceholder.typicode.com/users/" 
            + this.state.userObject.id, this.state.userObject).then(
                (response)=>{
                    console.log(response);
                    this.fetchData();
                    alert("Updated");
                    this.resetState();
                    
                }
            )
        }else{
            //save
            axios.post("https://jsonplaceholder.typicode.com/users",
             this.state.userObject).then((response)=>{
                console.log(response);
                this.fetchData();
                alert("Created");
                this.setState({userObject:{
                    title:"",
                    body:"",
                }})
            })

        }

        
    }
    
    resetState() {
        this.setState({
            userObject: {
                title: "",
                body: "",
                userId: 1,
            },
            isEditMode: false,
        });
    }

    render(){
        return(
            <>
            <h1>IN USER </h1>
            <form onSubmit={this.onFormSubmitClick}>
                <label>Title</label>
                <input name="title" value={this.state.userObject.title} 
                onChange={this.onChangeHandler}></input>
                <label>Body</label>
                <input name="body" value={this.state.userObject.body} 
                onChange={this.onChangeHandler}></input>
                <button type="submit">{this.state.isEditMode? 
                "Update" :"Submit"}</button>
                <button onClick={this.onCancelClickHandler}
                >Cancel</button>
            </form>
            {this.state.users.map((users, index)=>(
                <div key={index}><div>{index+1}.{users.title}</div>
                <button onClick={()=>{this.onDeleteClickHandler
                    (users.id)}}>Delete</button>
                <button onClick={()=>{this.onEditClickHandler
                    (users.id)}}>Edit</button>
                <br/>
                </div>
            ))}
            </>
        );
    }
    componentDidMount(){
        this.fetchData();
    }


    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data);
            this.setState({ users: response.data });

        });
    }
}