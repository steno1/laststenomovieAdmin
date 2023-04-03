//it will takes the action and accordingly updates Context state
const AuthReducer=(state, action)=>{
switch (action.type) {
    case "LOGIN_START":
        //if LOGIN_START, update our state
        //state
        return {
        user:null,
        isFetching:true,//check if we fetch data from api
        error:false    
        }
        case "LOGIN_SUCCESS":
//if LOGIN_SUCCESS, update our state            
            return {
            user:action.payload,
            isFetching:false,
            error:false    
            }
            case "LOGIN_FAILURE":
//if LOGIN_FAILURE, update our state                
                return {
                user:null,
                isFetching:false,
                error:true    
                };
                case "LOGOUT":
//if LOGIN_OUT, update our state                    
                    return {
                    user:null,
                    isFetching:false,
                    error:false    
                    };

    default: return {...state};

}
}

export default AuthReducer