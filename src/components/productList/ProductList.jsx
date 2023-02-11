import "./productlist.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid } 
from '@mui/x-data-grid';
import { productsRows } from "../../dummyData";
import {Link} from "react-router-dom"
import { useState } from "react";

const ProductList=()=>{
    const [data, setData]=useState(productsRows)
    const handleClick=(id)=>{
setData(data.filter(item=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'products', headerName: 'Products', width: 200, 
    renderCell:(params)=>{
        return(
            <div className="productListProfile">
                <img src={params.row.Avatar} className="productListImg"
                alt=""/>
                {params.row.name}
            </div>
        )
    } },
    { field: 'stock', headerName: 'Stock', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        {field: 'price',headerName: 'Price', width: 160,},
        {field: 'action',headerName: 'Action', width: 160,
    renderCell:(params)=>{
        return(
            <div className="arrangeButtons">
            <Link to={"/products/"+params.row.id}>
    <button className="productListEdit">Edit</button>
    </Link>
    <DeleteOutlinedIcon className="productListDelete"
      onClick={()=>handleClick(params.row.id)} 
    />

            </div>
        )
    }},
        
      ];

    return(
        <div className="productList">
<DataGrid disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
        </div>
    )
}
export default ProductList;