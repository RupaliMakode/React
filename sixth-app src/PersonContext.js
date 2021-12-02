import React from "react";



//create a new context
const PersonContext = React.createContext();


//provider
const PersonProvider =PersonContext.Provider;


//Consumer
const PersonConsumer =PersonContext.Consumer;


export{PersonProvider,PersonConsumer}