//it will takes the action and updates into Context.js
const MovieReducer = (state, action) => {
  switch (action.type) {
    //get lists
    case "GET_LISTS_START":
      return {
       movies: [],
      isFetching: true, //check if we fetch data from api
       error: false
    }
    case "GET_LISTS_SUCCESS":
     return {
     movies: action.payload,
     isFetching: false,
       error: false
      }
     case "GET_LISTS_FAILURE":
     return {
      movies: [],
       isFetching: false,
       error: true
      };
      default: return {...state};
    }
  }
  export default MovieReducer

         
