export default (props) =>{
    const {parentComponentName}= props
     return <h2>FirstChild
         <h4>First Child called from {parentComponentName}</h4>
     </h2>
}