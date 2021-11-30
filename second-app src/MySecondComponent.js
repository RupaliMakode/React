// import MySecondComponent from "../../first-app/src/MySecondComponent";



// const MySecondComponent=()=> {
//         return<h2> i am inside 
//             MyFirstComponent
//         </h2>;
// }
// export default MySecondComponent;

// import FirstChild from "./FirstChild";
// import SecondChlid from "./SecondChild";
// import ThirdChild from "./ThirdChild";
// function MySecondComponent(){
//  return(
//      <>
//      <h2> I am inside MySecondComponent</h2>
//      <FirstChild/>;
//     <SecondChlid/>;
//     <ThirdChild />;
//      </>
//  );
// };
// export default MySecondComponent;



// function MySecondComponent(props){
//     const{name2,age2}=props;
//     console.log(name2);
//     console.log(age2);
//     return(
//         <>
//         <h2>  Hello I am {name2},I am {age2} yrs old and I am inside MySecondComponent</h2>
//         {/*<FirstChild />;
//         <SecondChild />;
//         <ThirdChild />*/}
//         </>
//     );
//    }

//    export default MySecondComponent;


//    function MySecondComponent(props){
//     const{name2,age2}=props;
//     console.log(name2);
//     console.log(age2);
//     return(
//         <>
//         <h2>  Hello I am {name2},I am {age2} yrs old and I am inside MySecondComponent</h2>
//         {/*<FirstChild />;
//         <SecondChild />;
//         <ThirdChild />*/}
//         <h2></h2>
//         <h2> In MySecondComponent called from App </h2>
//         </>
//     );
//    }

//    export default MySecondComponent;


import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild"
import ThirdChild from "./ThirdChild"
export default (props) =>{
const { parentComponentName } = props;
return(
  <>
  <h2>
    ====*Second Component*====
    <h4>SecondComponent called from {parentComponentName}</h4>
  </h2>

   
    <FirstChild parentComponentName={"FirstComponent"}/>
    <SecondChild parentComponentName={"FirstComponent"}/>
    <ThirdChild parentComponentName={"FirstComponent"}/>

</>
);
}
