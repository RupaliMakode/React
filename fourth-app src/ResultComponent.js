import React,{ Component } from "react";

 export default class ResultComponent extends Component{
     state={
         percentage:0,
         result:"Invalid",
         color:"white",
     };

     onCalculteHandler =(event)=>{
         console.log("In Handler");
         this.setstate({percentage:event.target.value});
    };

     onClickHandler =()=>{
         const{result,color}=this.calculateResult(this.state.percentage);
    {/* this.setstate({result:this.calculateResult
    // (this.state.percentage)})*/}
      this.setstate({result,color});  //same as above statement

     };

     calculateResult=(percentage)=>{
        //  let result="Invalid";
        let resultObject = {
          result:"Invalid",
          color:"white",
        }
         if(percentage >=0 && percentage < 35){
            //  result="Fail !!!";
            resultObject = {
                result:"Fail !!!",
                color:"red",
              };
         }
         else if(percentage >= 35 && percentage <= 50){
            //  result="Just Pass .!.";
            resultObject = {
                result:"Just Pass .!.",
                color:"orange",
              };
         }
         else if(percentage > 50 && percentage <= 60){
            // result="Second Class ._.";
            resultObject = {
                result:"Second Class ._.",
                color:"yellow",
              };
        }
        else if(percentage > 60 && percentage <= 70){
            // result="First Class .*.";
            resultObject = {
                result:"First Class .*.",
                color:"green",
              };
        }
        else if(percentage > 70 && percentage <= 100){
            // result="Distinction (*_*)";
            resultObject = {
                result:"Distinction (*_*)",
                color:"violet",
              };
        }
        return resultObject;
       } ;
       render(){
           return(
               <>
               <h1> Result Calculator</h1>
               <input
               value={this.state.percentage}
               onChange={this.onCalculteHandler}
               />
               <button onClick={this.onClickHandler}>
                   Calculate Result
                    </button>
                  <div style={{background:this.state.color}} >
                      Your Result is:{this.state.result}
                      </div>   
               </>
           )
       } 

     
 }