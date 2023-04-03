import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
const Movie=()=>{
    const location=useLocation();
    const movie=location.state.movie;
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
<img src={movie.imgCoverPage} 
alt="" className="productInfoImg"/>
<span className="productName">{movie.title}</span>
</div>

<div className="productInfoBottom">
<div className="productInfoItem">
    <span className="productInfoKey">id:</span>
    <span className="productInfoValue">{movie._id}</span>
</div>

<div className="productInfoItem">
    <span className="productInfoKey">genre:</span>
    <span className="productInfoValue">{movie.genre}</span>
</div>


<div className="productInfoItem">
    <span className="productInfoKey">year:</span>
    <span className="productInfoValue">{movie.year}</span>
</div>

<div className="productInfoItem">
    <span className="productInfoKey">limit:</span>
    <span className="productInfoValue">{movie.limit}</span>
</div>

</div>
</div>
</div>
    <div className="productBottom">
<form className="productForm">
{/*Bottom Left */}
<div className="productFormLeft">
<label>Movie Title</label>
    <input type="text" 
    placeholder={movie.title}/>

    <label>Year</label>
    <input type="text" 
    placeholder={movie.year}/>

<label>Genre</label>
    <input type="text" 
    placeholder={movie.genre}/>

<label>Limit</label>
    <input type="text" 
    placeholder={movie.limit}/>

<label>Trailer</label>
    <input type="file" 
    placeholder={movie.trailer}/>

<label>Video</label>
    <input type="file" 
    placeholder={movie.video}/>

</div>
<div className="productFormRight">
<div className="productUpload">
<img src={movie.imgCoverPage} 
alt="coverpageImg"
    className="productUploadImg"
/>
<label htmlFor="file">
<Publish/>
</label>
<input type="file" id="file" 
   style={{display:"none"}} 
/>
</div>
<button className="productButton">
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