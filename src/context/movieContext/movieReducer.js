//it will takes the action and updates into Context.js
const MovieReducer=(state, action)=>{
    switch (action.type) {
        case "GET_MOVIES_START":
            return {
            movies:[],
            isFetching:true,//check if we fetch data from api
            error:false    
            }
            case "GET_MOVIES_SUCCESS":
                return {
                movies:action.payload,
                isFetching:false,
                error:false    
                }
                case "GET_MOVIES_FAILURE":
                    return {
                    movies:[],
                    isFetching:false,
                    error:true    
                    };



     case "DELETE_MOVIES_START":
      return {
    ...state,//not changing the movie [] current state
  isFetching:true,//check if we fetch data from api
     error:false    
    }
 case "DELETE_MOVIES_SUCCESS":
     return {
       movies:state.movies.filter((movie)=> movie._id !== action.payload),
     isFetching:false,
       error:false    
       }
      case "DELETE_MOVIES_FAILURE":
      return {
    ...state,
      isFetching:false,
      error:true    
      };
                    
    
        default: return {...state};
    
    }
    }
    
    export default MovieReducer