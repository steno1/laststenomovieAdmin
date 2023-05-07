//get movies
export const getListStart = () => ({
  type: "GET_LISTS_START"
})
export const getListSuccess = (list) => ({
  type: "GET_LISTS_SUCCESS",
  payload: list,
})
export const getListFailure = () => ({
  type: "GET_LISTS_FAILURE"
})

