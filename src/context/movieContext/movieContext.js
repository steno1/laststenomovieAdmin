import MovieReducer from "./movieReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE={
    movies:[],
    isFetching:false,
    error:false
}
//create context and pass initial state
export const MovieContext=createContext(INITIAL_STATE);
//create provider with children prop
export const MovieContextProvider=({children})=>{
const [state, dispatch]=useReducer(MovieReducer,INITIAL_STATE);
//cover app with AuthContext.Provider

return (
    <MovieContext.Provider value={{
    movies:state.movies,
    isFetching:state.isFetching,
    error:state.error,
    dispatch}}>
        {children}
    </MovieContext.Provider>
);
}