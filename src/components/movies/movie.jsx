import { Link, useLocation } from "react-router-dom";
import Chart from "../charts/Chart";
import { ProductsData } from "../../dummyData";
import "./movie.css"
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
     <div className="productTopLeft">
<Chart data={ProductsData} datakey="Sales" title="Sales Performance"
    
/>
    

</div>
<div className="productTopRight">
<div className="productInfoTop">
<img src={movie.imgCoverPage} 
alt="" className="productInfoImg"/>
<span className="productName">{movie.title}</span>
</div>

<div className="productInfoBottom">
<div className="productInfoItem">
    <span className="productInfoKey">id:</span>
    <span className="productInfoValue">123</span>
</div>

<div className="productInfoItem">
    <span className="productInfoKey">Sales:</span>
    <span className="productInfoValue">$150</span>
</div>


<div className="productInfoItem">
    <span className="productInfoKey">active:</span>
    <span className="productInfoValue">Yes</span>
</div>

<div className="productInfoItem">
    <span className="productInfoKey">In stock:</span>
    <span className="productInfoValue">No</span>
</div>

</div>
</div>
</div>
    <div className="productBottom">
<form className="productForm">
{/*Bottom Left */}
<div className="productFormLeft">
<label>Product Name</label>
    <input type="text" 
    placeholder="Samsung Earpiece"/>
    <label>In Stock</label>
    
    <select name="instock" id="instock">
    <option value="yes">Yes</option>
    <option value="No">No</option>
    </select>

    <label>Active</ label>
    
    <select name="active" id="active">
    <option value="yes">Yes</option>
    <option value="No">No</option>
    </select>
</div>
<div className="productFormRight">
<div className="productUpload">
<img src="data:image/jpeg;base64,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" 
alt=""
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