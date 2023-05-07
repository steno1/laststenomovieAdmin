//it will takes the action and updates into Context.js
const ListReducer = (state, action) => {
  switch (action.type) {
    //get movies
    case "GET_LISTS_START":
      return {
        list: [],
          isFetching: true, //check if we fetch data from api
          error: false
      }
      case "GET_LISTS_SUCCESS":
        return {
          list: action.payload,
            isFetching: false,
            error: false
        }
        case "GET_LISTS_FAILURE":
          return {
            list: [],
              isFetching: false,
              error: true
          };
                default:
                  return {
                    ...state
                  };

  }
}

export default ListReducer