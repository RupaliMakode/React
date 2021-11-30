import { Route, Routes } from "react-router";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavbarComponent from "./NavbarComponent";
import PostComponent from "./PostComponent";
import ToDoComponent from "./ToDoComponent";
import UserComponent from "./UserComponent";
function App() {
  return (
    <div>
       <h1 style={{backgroundColor: "lightblue"}}>Component</h1>

    <HeaderComponent/>
    <NavbarComponent/>
    <Routes>
      <Route path={"/post"} element={<PostComponent/>}/>
      <Route path={"/todo"} element={<ToDoComponent/>}/>
      <Route path={"/user"} element={<UserComponent/>}/>
    </Routes>
    {/* <FooterComponent/> */}
    </div>
  );
}

export default App;
