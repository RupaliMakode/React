// const MyFirstComponent =()=> {
//         return<h2> i am inside 
//             MyFirstComponent
//         </h2>;
// }
// export default MyFirstComponent;
// import FirstChild from "./FirstChild";
// import SecondChild from "./SecondChild"
// import ThirdChild from "./ThirdChild";

//import app from "./App";

// function MyFirstComponent(){
//     return(
//         <>
//         <h2> I am inside MyFirstComponent</h2>
//         <FirstChild />;
//         <SecondChild />;
//         <ThirdChild />;
//         </>
//     );
//    };

//    export default MyFirstComponent;
          

                 //*** props  ***//


// function MyFirstComponent(props){
//     console.log(props);
//     const{name1,age1 , children}=props;
//     console.log(name1);
//     console.log(age1);
//     return(
//         <>
//         <h2>  Hello I am {name1},I am {age1} yrs old and I am inside MyFirstComponent</h2>
//         {/*<FirstChild />;
//         <SecondChild />;
//         <ThirdChild />*/}

//     {children}
//         </>
//     );
//    }
//    export default MyFirstComponent;


import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild"
import ThirdChild from "./ThirdChild"
export default (props) =>{
const { parentComponentName } = props;
return(
  <>
  <h2>
    ====*First Component*====
    <h4>FirstComponent called from {parentComponentName}</h4>
  </h2>

   
    <FirstChild parentComponentName={"FirstComponent"}/>
    <SecondChild parentComponentName={"FirstComponent"}/>
    <ThirdChild parentComponentName={"FirstComponent"}/>

</>
);
}
