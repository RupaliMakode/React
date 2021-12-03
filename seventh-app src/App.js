// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export defau
  import React from "react";
  import { Route, Routes } from "react-router";
import { Suspense } from "react";
import NavbarComponent from "./NavbarComponent";
import  Buffer from "./Buffer";
import ErrorBoundries from "./ErrorBoundries";
import SampleError from "./SampleError";
import FragmentSample from "./FragmentSample";
  const CodeSplitting=React.lazy(()=>import ("./CodeSplitting"));

  const PostComponent = React.lazy(()=> import("./PostComponent")) ;
  const ToDoComponent =  React.lazy(()=>import("./ToDoComponent"));
  const UserComponent=React.lazy(()=>import("./UserComponent"))
  function App(){
  return(
    <>
    <NavbarComponent/>
    <FragmentSample/>
    <ErrorBoundries>
      <SampleError/>
    </ErrorBoundries>
    {/* <Suspense fallback={<h1> 
      <Buffer/> </h1>}>

      <CodeSplitting/>
      <Routes>
      <Route path={"/post"} element={<PostComponent/>}/>
      <Route path={"/todo"} element={<ToDoComponent/>}/>
      <Route path={"/user"} element={<UserComponent/>}/>
    </Routes>
    </Suspense> */}
    </>
 
  );
}
 export default App;