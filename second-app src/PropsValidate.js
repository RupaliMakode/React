import PropTypes from "prop-types"
function Propsvalidate(props)
{
    const {name,age,children,renderable,rollNumber,remark,myArr,myObject}=props;
    return(
        <>
        <h2> Name:{name}</h2>
        <h2> Age:{age}</h2>
        <h2> After 5 years my age will be:{age +5}</h2>
       <h2> {age}</h2>

        <h2>{renderable}</h2>
        <h2>{rollNumber}</h2>
    
        {children}
        
        </>
    );
}
Propsvalidate.propTypes={
    name:PropTypes.string,
    age:PropTypes.number.isRequired,
    children:PropTypes.element.isRequired,
    renderable:PropTypes.node,
  rollNumber:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
remark:PropTypes.any,
myArr:PropTypes.arrayOf(PropTypes.number),
// myObject:PropTypes.shape{{.//It will  allow new properties
//name:PropTypes.string
//age:PropTypes.number
//mobile:PropTypes.number,
//..}}
myObject:PropTypes.exact({
    name:PropTypes.string,
     age:PropTypes.number,
    mobile:PropTypes.number
}),
};
export default Propsvalidate;