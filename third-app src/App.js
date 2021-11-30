// import TrueComponent from "./TrueComponent"
// import FalseComonent from "./FalseComonent";
// function App(){
//     const name="Ankur";
//     return(
//         <div>
//             <h1>from App</h1>
//           {/* {name === "Ankur" ? <TrueComponent/>  : <FalseComonent  />}*/}
//             {name === "Ankur" && <TrueComponent/>}
//         </div>
//     );

    
// }
// export default App;
import ConditionalComponent from "./ConditionalComponent";
function App()
{
    return(
        <div>
            <h1>From App</h1>
            
            <ConditionalComponent/>
        </div>
    )
}
export default App;