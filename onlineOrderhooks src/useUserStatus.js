export default (userId)=>{
    // let Status ="Online";
//     //code to fetch the users status from server(API Call)
//  if(userId%2 == 0){
//      return Status="Online";
//  }
//  else{
//      return Status="Offline";
//  }
//  return Status;
    return userId%2  ? "Online":"Offline";
  
};