import { useState } from "react"
import Sidebar from "../../sidebar/Sidebar"
import Topbar from "../../topbar/Topbar"


import "./newproduct.css"
const NewProduct=()=>{
    const [movie, setMovie]=useState(null)
    const [img, setImg]=useState(null)
    const [imgTitle, setimgTitle]=useState(null)
    const [imgSmall, setimgSm]=useState(null)
    const [trailer, setTrailer]=useState(null)
    const [video, setVideo]=useState(null)
    const [uploaded, setUploaded]=useState(0);

    const handleChange=(e)=>{
       
};

 
console.log(movie)
    return(
        <>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="newproduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
<div className="addProductItem">
<label> Image</label>
<input type="file"
id="img"
name="img"
    onChange={(e)=>setImg(e.target.files[0])}
/>
</div>
<div className="addProductItem">
<label>Title Image</label>
<input type="file"
id="imgTitle"
name="imgTitle"
onChange={(e)=>setimgTitle(e.target.files[0])}
/>
</div>
<div className="addProductItem">
<label>Thumbnail Image</label>
<input type="file"
id="imgSmall"
name="imgSmall"
onChange={(e)=>setimgSm(e.target.files[0])}
/>
</div>
<div className="addProductItem">
    <label>Title</label>
    <input type="text"
     placeholder="Ninja Assassin"
     name="title"
        onChange={handleChange}
     />

</div>
<div className="addProductItem">
<label>Description</label>
<input type="text"
 placeholder="description"
 name="desc"
 onChange={handleChange}
 />
</div>

<div className="addProductItem">
<label>Year</label>
<input type="text"
 placeholder="Year"
  name="year"
  onChange={handleChange} />
</div>

<div className="addProductItem">
<label>Genre</label>
<input type="text"
 placeholder="Genre"
  name="genre"
  onChange={handleChange}
  />
</div>

<div className="addProductItem">
<label>Duration</label>
<input type="text"
 placeholder="Duration"
  name="duration"
  onChange={handleChange}
  />
</div>

<div className="addProductItem">
<label>Limit</label>
<input type="text"
 placeholder="Limit"
  name="limit"
  onChange={handleChange}
  />
</div>

<div className="addProductItem">
<label>Is Series?</label>
<select name="isSeries" id="isSeries">
<option value="false">No</option>
<option value="true">Yes</option>

</select>
</div>

<div className="addProductItem">
<label>Trailer</label>
<input type="file" onChange={(e)=>setTrailer(e.target.files[0])} />
</div>

<div className="addProductItem">
<label>Video</label>
<input type="file" onChange={(e)=>setVideo(e.target.files[0])} />
</div>
{uploaded ===5 ?(
    <button className="addProductButton">Create</button>
):(
    <button className="addProductButton" >Upload</button>
)}

            </form>
        </div>
        </div>
        </>
    )
}
export default NewProduct