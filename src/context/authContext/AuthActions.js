export const LoginStart=()=>({
type:"LOGIN_START"//Actions
});

export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user// user is returned to update state. user=email & password
    });
    
export const LoginFailure=()=>({
        type:"LOGIN_FAILURE"
        });
//Actions are dispatched

// logout
export const Logout=()=>({
    type:"LOGOUT"
    });
    
   