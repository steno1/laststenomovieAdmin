//get movies
export const getMoviesStart = () => ({
  type: "GET_MOVIES_START"
})
export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
})
export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE"
})

//create movies
export const createMoviesStart = () => ({
  type: "CREATE_MOVIE_START"
})
export const createMoviesSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
})
export const createMoviesFailure = () => ({
  type: "CREATE_MOVIE_FAILURE"
})

//update movies
export const updateMoviesStart = () => ({
  type: "UPDATE_MOVIE_START"
})
export const updateMoviesSuccess = (movie, id) => ({
  type: "UPDATE_MOVIE_SUCCESS",
  payload: [movie, id]
  
})
export const updateMoviesFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE"
})

//delete
export const deleteMoviesStart = () => ({
  type: "DELETE_MOVIES_START"
})
export const deleteMoviesSuccess = (id) => ({
  type: "DELETE_MOVIES_SUCCESS",
  payload: id,
})
export const deleteMoviesFailure = () => ({
  type: "DELETE_MOVIES_FAILURE"
})