import logo from './logo.svg';
import './App.css';
import Accessibility from './Accessibility';
import { PersonProvider } from './PersonContext';
import ContextConsumer from './ContextConsumer';
import { UserProvider } from './UserContext';
import UserA from './UserA';

function App() {
  return (
    <div className="App">
      <UserProvider value={{
      username:"Rupali_Patil", 
      password:"Rups0178", 
      userid:178, 
      lastlogin:"2st Dec 2021 04:40",
      age:23,
      currentAddress:"Katraj"
      }}>
        <UserA/>
      </UserProvider>
      
    </div>
  );
}

export default App;