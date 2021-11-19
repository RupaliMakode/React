// import FirstChild from "./FirstChild";
// import SecondChlid from "./SecondChild";
// import ThirdChild from "./ThirdChild";
// function MyThirdComponent(){
//  return(
//      <>
//      <h2> I am inside MyThirdComponent</h2>
//      <FirstChild/>;
//         <SecondChlid/>;
//         <ThirdChild/>;
//      </>
//  );
// };
// export default MyThirdComponent;

// function MyThirdComponent(props){
//     const{name3,age3}=props;
//     console.log(name3);
//     console.log(age3);
//     return(
//         <>
//         <h2>  Hello I am {name3},I am {age3} yrs old and I am inside MySecondComponent</h2>
//         {/*<FirstChild />;
//         <SecondChild />;
//         <ThirdChild />*/}
//         </>
//     );
//    }

import "./App.css";
import MyFirstComponent from "./MyFirstComponent";

import MySecondComponent from "./MySecondComponent";
import MyThirdComponent from "./MyThirdComponent";
function App() {
  const name = "Hrithi";
  const name1 = "Hrishi";
  // const name2="";

  return (
    <div className="App">
      

      <h1>Hello {name && name.length ? name : "World"}</h1>
     
      <div>
        <MyFirstComponent   parentComponentName={"App"}/>
      </div>
      <div>
        <MySecondComponent   parentComponentName={"App"}/>
      </div>
      <div>
        <MyThirdComponent name={name} age={23} parentComponentName={"App"}>
              <h2>Child of the Third Component </h2>
             

        </MyThirdComponent>
      </div>
      
    </div>
  );
}

export default App;