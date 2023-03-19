import AuthReducer from "./AuthReducer";
import { createContext, useReducer, useEffect } from "react";
const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}
//create context and pass initial state
export const AuthContext=createContext(INITIAL_STATE);
//create provider with children prop
export const AuthContextProvider=({children})=>{
const [state, dispatch]=useReducer(AuthReducer,INITIAL_STATE);
//cover app with AuthContext.Provider
useEffect(()=>{
localStorage.setItem('user', JSON.stringify(state.user))
},[state.user])

return (
    <AuthContext.Provider value={{
    user:state.user,
    isFetching:state.isFetching,
    error:state.error,
    dispatch}}>
        {children}
    </AuthContext.Provider>
)
}