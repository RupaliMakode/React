import logo from './logo.svg';
import './App.css';
import ClassComponentConversion from './ClassComponentConversion';
import FunctionComponent from './FunctionComponent';
import OnlineOrders from './OnlineOrders';
import OfflineOrders from './OfflineOrders';

function App() {
  return (
   <div className="container text-center" >
   <OnlineOrders/>
   <OfflineOrders/>
       {/* <FunctionComponent/> */}
      {/* <ClassComponentConversion/> */} 
</div>
  );
}

export default App;
