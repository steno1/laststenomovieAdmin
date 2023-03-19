export const LoginStart=()=>({
type:"LOGIN_START"
});

export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
    });
    
export const LoginFailure=()=>({
        type:"LOGIN_FAILURE"
        });
//Actions are dispatched

// logout
export const LogoutStart=()=>({
    type:"LOGOUT"
    });
    
   