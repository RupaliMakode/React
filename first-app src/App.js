// import logo from './logo.svg';
// // import './App.css';



// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


// import MyFirstComponent  from "./MyFirstComponent";
// import MySecondComponent from "./MySecondComponent";
// function app ()
// {
// const name="Hritya";
//   return(
// <div> 
//   <h1> Hello World  </h1>
//   <div>
//     <h1>{name}</h1>
//   </div>
//   <MyFirstComponent/>
//   <MySecondComponent/>
// </div>
//   );

// }
// export default app;
import DynamicClass from "./DynamicClass";
import RefsExample from"./RefsExample";

function App(){
  return(
   
    // <FormComponent/>
    // <PersonFormComponent/>
    // <RefsCallBack/>
    // <RefsExample/>

<div>
      <h1 className={"my-class"} >from App</h1>
      <div className={"my-div"}>
        
      I am inside my div
      </div>

    <DynamicClass/>
    </div>
  );
 
}
export default App;