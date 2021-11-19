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

// import MyFirstComponent  from "./MyFirstComponent";
// import MySecondComponent from "./MySecondComponent";
// import MyThirdComponent from "./MyThirdComponent";
// function app ()
// {
// return(
//   <>
// <div> 
//   <h1> Hello World  </h1>
    
//   <MyFirstComponent />
//   <MySecondComponent />
//   <MyThirdComponent />
// </div>
// </>
//   );
// }
// // export default app;

// import MyFirstComponent  from "./MyFirstComponent";
// import MySecondComponent from "./MySecondComponent";
// import MyThirdComponent from "./MyThirdComponent";
// function app ()
// {
//   const name1 ="Hritya";
//   const name2 ="Ish";
//   const name3 ="prathmesh";
// return(

// <div> 
//    <h1> Hello {name1 && name1.length ? name1:"world"}  </h1>
//     <h1> Hello {name2 && name2.length ? name2:"world"}  </h1>
//     <h1> Hello {name3 && name3.length ? name3:"world"}  </h1>
//    <h2> some data is passed form App component </h2>
//       {/*<MyFirstComponent  name1 ={name1} age1={23} />
//       <MySecondComponent  name2 ={name2 } age2={20} /> 
// <MyThirdComponent   name3 ={name3 } age3={25} /> */}
//  <h1>Hello {name && name.length ? name : "World"}</h1>
//       {/* <h1>Hello {name2 && name2.length ? name2 : "World"}</h1> */}
//       <div>
//         <MyFirstComponent   parentComponentName={"App"}/>
//       </div>
//       <div>
//         <MySecondComponent   parentComponentName={"App"}/>
//       </div>
//       <div>
//         <MyThirdComponent name={name} age={29} parentComponentName={"App"}>
//               <h2>Child of the Third Component </h2>
//               {/* children - anything inside the opening closing betn tags are children  */}

//         </MyThirdComponent>
//       </div>
//       <div>
//         <MyForthComponent name={name1} age={23}   parentComponentName={"App"} />
//       </div>
//     </div>
//   );
// }

// export default App;




import MyFirstComponent from "./MyFirstComponent";

import MySecondComponent from "./MySecondComponent";

 function App(){

  return (
      
      <div>
        <MyFirstComponent   parentComponentName={"App"}/>
  
        <MySecondComponent   parentComponentName={"App"}/>
  
      
    </div>
  );
}

export default App;