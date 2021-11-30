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

// export default App;


// function App(){
//   return(
//     <>
//    <h1>From App</h1>
    
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

// <h4>
// History
// Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.

// Bootstrap was created at Twitter in mid-2010 by @mdo and @fat. Prior to being an open-sourced framework, Bootstrap was known as Twitter Blueprint. A few months into development, Twitter held its first Hack Week and the project exploded as developers of all skill levels jumped in without any external guidance. It served as the style guide for internal tools development at the company for over a year before its public release, and continues to do so today.

// Originally released on Friday, August 19, 2011, we’ve since had over twenty releases, including two major rewrites with v2 and v3. With Bootstrap 2, we added responsive functionality to the entire framework as an optional stylesheet. Building on that with Bootstrap 3, we rewrote the library once more to make it responsive by default with a mobile first approach.

// With Bootstrap 4, we once again rewrote the project to account for two key architectural changes: a migration to Sass and the move to CSS’s flexbox. Our intention is to help in a small way to move the web development community forward by pushing for newer CSS properties, fewer dependencies, and new technologies across more modern browsers.
// </h4>
// <h1>
// <img src="bootstrap.png" />
// </h1>

// <footer class="page-footer font-small blue">

  
//   <div class="footer-copyright text-center py-3">© 2020 Copyright:
//     <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//   </div>
  

// </footer>

//     </>
//   )
// }
// export default App;

import { Routes ,Route} from "react-router";
import BodyComponent from "./BodyComonent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavbarComponent from "./NavbarComponent";
import PostComponent from "./PostComponent";
import ToDoComponent from "./ToDoComponent";

function App(){
  return(
    <>
    <HeaderComponent/>
    <NavbarComponent/>
  
    
    
    
    <Routes>
      <Route path={"/Post"} element={<PostComponent/>}/>
      
      <Route path={"/ToDo"} element={<ToDoComponent/>}/>

    </Routes>
    <FooterComponent/>
    </>

  )
}
export default App;


















