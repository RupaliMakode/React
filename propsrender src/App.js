
import './App.css';
import Decrement from './Decrement';
import Decrementer from './Decrementer';
import DemoComponent from './DemoComponent';
import Increment from './Increment';
import Incrementer from './Incrementer';
import NewDecrement from './NewDecrement';
import NewIncrement from './NewIncrement';
import NormalProps from './NormalProps';

function App() {
  return (
  <div className="App">

 {/*  normal props
<NormalProps render={(someValue) =>{
return "Old Name" +  someValue;
}}
/> */}


  Increment
{/* <Incrementer render={(value ,onClickHandler)=>{
  return <Increment value={value} onClickHandler={onClickHandler}/>;
}}
/> */}

{/* New Increment */}
{/* <Incrementer render={(value ,onClickHandler)=>{
  return <NewIncrement value={value} onClickHandler={onClickHandler}/>;
}}
/> */}

{/* Decrement */}
{/* <Decrementer render={(value,onClickHandler)=>{
  return <Decrement value={value} onClickHandler={onClickHandler}/>;
}}/> */}

{/* New Decrement */}
{/* <Decrementer render={(value,onClickHandler)=>{
  return <NewDecrement value={value} onClickHandler={onClickHandler}/>;
  }}/>  */}


<DemoComponent/>
    </div>
  );
}

export default App;













