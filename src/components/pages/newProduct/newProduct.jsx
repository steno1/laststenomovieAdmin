import "./newproduct.css"
const NewProduct=()=>{
    return(
        <div className="newproduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
<div className="addProductItem">
<label> Image</label>
<input type="file" id="file"/>
</div>
<div className="addProductItem">
    <label>Name</label>
    <input type="text" placeholder="Samsung Earpiece"/>

</div>
<div className="addProductItem">
<label>Stock</label>
<input type="text" placeholder="70"/>
</div>

<div className="addProductItem">
<label>Active</label>
<select name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
</div>
<button className="addProductButton">create</button>
            </form>
        </div>
    )
}
export default NewProduct