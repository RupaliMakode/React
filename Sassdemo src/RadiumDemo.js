import Radium from "radium";

 const RadiumDemo= ()=>{
return(
    <div style={styles.block}>
    <h1> In RadiumDemo</h1>
    <button style={[styles.button,styles.primaryButton]}>
    Primary Button
    </button>
    <br/>
    <br/>
    <button style={[styles.button,styles.secondaryButton]}>
    Secondary Button
    </button>
    </div>
 );
};

const styles ={
    block:{
        backgroundColor: "#557a95",
    },
    baseButton:{
        color:"white",
    },
    primaryButton:{
        backgroundColor:"#5d5c61",
    },
    secondaryButton:{
        backgroundColor:"#379683",
    },
};

 export default Radium(RadiumDemo);