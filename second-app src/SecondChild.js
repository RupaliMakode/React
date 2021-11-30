export default (props) =>{
    const {parentComponentName}= props
     return <h2>SecondChild
         <h4>Second Child called from {parentComponentName}</h4>
     </h2>
}