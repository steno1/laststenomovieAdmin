import ListReducer from "./listReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE={
    list:[],
    isFetching:false,
    error:false
}
//create context and pass initial state
export const ListContext=createContext(INITIAL_STATE);
//create provider with children prop
export const ListContextProvider=({children})=>{
const [state, dispatch]=useReducer(ListReducer,INITIAL_STATE);
//cover app with AuthContext.Provider

return (
    <ListContext.Provider value={{
    list:state.list,
    isFetching:state.isFetching,
    error:state.error,
    dispatch}}>
        {children}
    </ListContext.Provider>
);
}