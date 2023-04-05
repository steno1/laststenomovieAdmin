import { useState } from "react"
import Sidebar from "../../sidebar/Sidebar"
import Topbar from "../../topbar/Topbar"
import storage from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./newproduct.css"

const NewProduct=()=>{
    const [movie, setMovie]=useState(null)
    const [img, setImg]=useState(null)
    const [imgTitle, setimgTitle]=useState(null)
    const [imgSmall, setimgSm]=useState(null)
    const [trailer, setTrailer]=useState(null)
    const [video, setVideo]=useState(null)
    const [uploaded, setUploaded]=useState(0);

    const handleChange = (e) => {
        //use one useState to set all states

const value=e.target.value;
       setMovie({...movie, [e.target.name]:value});
};
const upload=(items)=>{
items.forEach((item)=>{
    //`/items/${item.file.name}`=folder and file name
const storageRef = ref(storage, `/items/${item.file.name}`);
    //uploading file to storage
    const uploadTask = uploadBytesResumable(storageRef, item.file);
    // seeing percentage of uploads
    uploadTask.on("state_changed", snapshot=>{
        const progress= (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    }, (err)=>{console.log(err)}, 
    () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//set url to movie object with label
          setMovie((prev)=>{
            return {...prev, [item.label]:url}
          });
          //increase uploaded
          setUploaded((prev)=>prev+1);
        });
      })
})
}

//uploading to firebase
const handleUpload=(e)=>{
    e.preventDefault();
    upload([
        //the values should=movie model in api
        {file:img, label:'img'},
        {file:imgTitle, label:'imgTitle'},
        {file:imgSmall, label:'imgSmall'},
        {file:trailer, label:'trailer'},
        {file:video, label:'video'},

    ])
}
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
    <button className="addProductButton" onClick={handleUpload} >
    Upload</button>
)}

            </form>
        </div>
        </div>
        </>
    )
}
export default NewProduct