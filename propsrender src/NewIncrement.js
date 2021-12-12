export default (props) =>{
    // const [value, setValue] = useState(0);
    // const onClickHandler =() => {
    // setValue(value + 1);
    // };
   return(
       <>
       <h1>In New Increment</h1>
       value:{props.value}
       <br/>
       <button onClick={props.onClickHandler}> 
       Increment</button>
       </>
   );
};