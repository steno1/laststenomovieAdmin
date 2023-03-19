//it will takes the action and updates into Context.js
const AuthReducer=(state, action)=>{
switch (action.type) {
    case "LOGIN_START":
        return {
        user:null,
        isFetching:true,//check if we fetch data from api
        error:false    
        }
        case "LOGIN_SUCCESS":
            return {
            user:action.payload,
            isFetching:false,
            error:false    
            }
            case "LOGIN_FAILURE":
                return {
                user:null,
                isFetching:false,
                error:true    
                };
    default: return {...state};

}
}

export default AuthReducer