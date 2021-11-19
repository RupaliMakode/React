export default (props) =>{
    const {parentComponentName}= props
     return <h2>ThirdChild
         <h4>Third Child called from {parentComponentName}</h4>
     </h2>
}