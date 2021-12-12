export default (props)=>{
    
    return(
        <>
        <h1>In Decrement </h1>
        value:{props.value}
        <br/>
        <button onClick={props.onClickHandler}>
            Decrement
        </button>
        </>
    );
};