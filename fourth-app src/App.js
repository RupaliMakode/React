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
import ResultComponent from "./ResultComponent";
import MarkSheet from "./MarkSheet";
function App(){
  return(
   <>
    {/* // <FormComponent/>
    // <PersonFormComponent/>
    // <RefsCallBack/>
    // <RefsExample/> */}
     <h1>Result  </h1>
    <ResultComponent/>

       {/* <h1 className={"my-class"} >See The Result</h1>
      <div className={"my-div"}>
         */}
      
      </>

  
  );
 
}
export default App;