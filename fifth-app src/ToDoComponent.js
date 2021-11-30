import axios, { Axios } from "axios";
import React,{Component} from "react";
export default class ToDoComponent extends Component{
    state={
        todos:[],
        isEditMode:false,
        todoObject:{
            title:"",
            body:"",
            userId:1,
        },
    }
    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/todos/" 
        +id).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Deleted");
        });
    };
    onEditClickHandler=(id)=>{
        //get specific object by id from the list
        const editObject= this.state.todos.find((todo)=>todo.id===id);

        //set the object to state.postObject
        this.setState({todoObject:editObject, isEditMode: true})
    };
    onCancelClickHandler=(event)=>{
        event.preventDefault();
        this.setState({
            todoObject:{
                title:"",
                body:"",
                userId:1,
            },
            isEditMode:false,
        });

    };
    onChangeHandler=(event)=>{
        const{name, value}=event.target;
        const todoObjectCopy=this.state.todoObject;
        todoObjectCopy[name]=value;
        this.setState({todoObject:todoObjectCopy})
    }
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if(this.state.isEditMode){
            //edit
            axios.put("https://jsonplaceholder.typicode.com/todos/" 
            +this.state.todoObject.id, this.state.todoObject).then(
                (response)=>{
                    console.log(response);
                    this.fetchData();
                    alert("Updated");
                    this.resetState();
                    
                }
            )
        }else{
            //save
            axios.post("https://jsonplaceholder.typicode.com/todos", this.state.postObject).then((response)=>{
                console.log(response);
                this.fetchData();
                alert("Created");
                this.setState({todoObject:{
                    title:"",
                    body:"",
                }})
            })

        }

        
    }
    
    resetState() {
        this.setState({
            todoObject: {
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
            <h1>IN TODO </h1>
            <form onSubmit={this.onFormSubmitClick}>
                <label>Title</label>
                <input name="title" value={this.state.todoObject.
                    title} onChange={this.onChangeHandler}>

                    </input>
                <label>Body</label>
                <input name="body" value={this.state.todoObject.body}
                onChange={this.onChangeHandler}></input>
                <button type="submit">{this.state.isEditMode? "Update" :"Submit"}</button>
                <button onClick={this.onCancelClickHandler}>
                    Cancel</button>
            </form>
            {this.state.todos.map((todos, index)=>(
                <div key={index}><div>{index+1}.{todos.title}</div>
                <button onClick={()=>{this.onDeleteClickHandler(todos.id)}}>Delete</button>
                <button onClick={()=>{this.onEditClickHandler(todos.id)}}>Edit</button>
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
        axios.get("https://jsonplaceholder.typicode.com/todos").
        then((response) => {
            console.log(response.data);
            this.setState({ todos: response.data });

        });
    }
}