import React from "react";

//create new context
const userContext= React.createContext();

//provider
const UserProvider= userContext.Provider;

//consumer
const UserConsumer= userContext.Consumer;


export{UserProvider, UserConsumer}; 