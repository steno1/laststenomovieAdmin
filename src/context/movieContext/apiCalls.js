import axios from "axios";
import {
    getMoviesStart,
    getMoviesFailure,
    getMoviesSuccess,
    deleteMoviesStart,
    deleteMoviesSuccess,
    deleteMoviesFailure,
    createMoviesStart,
    createMoviesSuccess,
    createMoviesFailure,
    updateMoviesStart,
    updateMoviesSuccess,
    updateMoviesFailure


} from "./movieActions";
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(getMoviesSuccess(res.data))

    } catch (err) {
        dispatch(getMoviesFailure())
    }
}

//create movies
//movie is from movie usestate in newProduct
//movie is the body
export const createMovies = async (movie, dispatch) => {
    dispatch(createMoviesStart());
    try {
        const res = await axios.post("/movies/", movie, {
       //movie here is the body   
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(createMoviesSuccess(res.data))

    } catch (err) {
        dispatch(createMoviesFailure())
    }
}


//update
export const updateMovies = async (movie, dispatch) => {
    dispatch(updateMoviesStart());
    try {
        const res = await axios.put("/movies/63f4282ae7fd9be59b5fb9c9", movie, {
       //movie here is the body   
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(updateMoviesSuccess(res.data))

    } catch (err) {
        dispatch(updateMoviesFailure())
    }
}





//delete movies
export const deleteMovies = async (id, dispatch) => {
    dispatch(deleteMoviesStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(deleteMoviesSuccess(id))

    } catch (err) {
        dispatch(deleteMoviesFailure())
    }
}