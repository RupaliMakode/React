import logo from './logo.svg';
import './App.css';
import HooksSample from './HooksSample';
import RefParent from './RefParent';
import PortalDemo from './PortalDemo';
import  ProfilerDemo  from './ProfileDemo';
import UserHooksSample from './UserHooksSample';
function App() {
  const onClickHandler =()=>{
    console.log("Clicked");
  };
  return (
    <div className="App">
      {/* <h1>Sample App Using Hooks</h1>
      <HooksSample/>  */}
      {/* <RefParent/> */}
      I am inside App Component
      {/* <PortalDemo/> */}
      {/* <ProfilerDemo/> */}
      <UserHooksSample/>
    </div>
  );
}

export default App;
