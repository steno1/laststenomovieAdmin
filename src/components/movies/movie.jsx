import { Link, useLocation } from "react-router-dom";
import React, { useContext } from 'react'
import "./movie.css";
import { Publish } from "@material-ui/icons";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import { updateMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/movieContext";
const Movie=()=>{
    const {dispatch, movie}=useContext(MovieContext)
    const location=useLocation();
    const movies=location.state?.movie;

    const handleUpdate=(e)=>{
e.preventDefault();
// api calls
updateMovies(movie, dispatch)
    }
    return(
        <>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="product">
        
        {/* productTitle and Create button container*/}
<div className="productTitleContainer">
<h1 className="productTitle">Movie</h1>
<Link to="/Products/newProduct">
<button className="productAddButton">Create</button>
</Link>
</div>
 {/* product Top and Buttom container*/}
 
    <div className="productTop">
    {/* remove the chart and re arrange the component later*/}
     
<div className="productTopRight">
<div className="productInfoTop">
<img src={movies?.imgCoverPage} 
alt="" className="productInfoImg"/>
<span className="productName">{movies?.title}</span>
</div>

<div className="productInfoBottom">


<div className="productInfoItem">
    <span className="productInfoKey">genre:</span>
    <span className="productInfoValue">{movies?.genre}</span>
</div>


<div className="productInfoItem">
    <span className="productInfoKey">year:</span>
    <span className="productInfoValue">{movies?.year}</span>
</div>

<div className="productInfoItem">
    <span className="productInfoKey">limit:</span>
    <span className="productInfoValue">{movies?.limit}</span>
</div>

</div>
</div>
</div>
    <div className="productBottom">
<form className="productForm">
{/*Bottom Left */}
<div className="productFormLeft">

<label>Movie Title</label>
    <input type="text" name="title"
    defaultValue={movies?.title} 
    />
    
    <label>Year</label>
    <input type="text" name="year"
    defaultValue={movies?.year}
    />

<label>Genre</label>
    <input type="text" name="genre"
    defaultValue={movies?.genre}
    />

<label>Limit</label>
    <input type="text" name="limit"
    defaultValue={movies?.limit}
    />

<label>Trailer</label>
    <input type="file" 
    defaultValue={movies?.trailer}
   // onChange={(e)=>setTrailer(e.target.files[0])}
    />       
    

<label>Video</label>
    <input type="file" 
    defaultValue={movies?.video}
   // onChange={(e)=>setVideo(e.target.files[0])}       
    />

</div>
<div className="productFormRight">
<div className="productUpload">
<img src={movies?.imgCoverPage} 
alt="coverpageImg"
    className="productUploadImg"
/>
<label htmlFor="file">
<Publish/>
</label>
<input type="file" id="file" 
   style={{display:"none"}} 
  // onChange={(e)=>setImg(e.target.files[0])}
/>
</div>
<button className="productButton"
onClick={handleUpdate}
>
    Update
</button>

</div>
</form>
    </div>
 </div>
  </div>
 </>
        
    )
}
export default Movie;