//apiCalls
import axios from "axios";
import { LoginFailure, 
    LoginStart, 
    LoginSuccess } from "./AuthActions";
export const login= async (user, dispatch)=>{
    //user is user email and passwords, thats the credentials
dispatch(LoginStart());
try{
const res= await axios.post("auth/login", user);
res.data.isAdmin && dispatch(LoginSuccess(res.data))
}catch(err){
dispatch(LoginFailure());
}
}
