import "./listlist.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { useContext, useEffect } from "react";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import { ListContext } from "../../../context/ListContext/movieContext/listContext";
import { getList } from "../../../context/ListContext/movieContext/apiCalls";


const ListList=()=>{
const {list, dispatch}=useContext(ListContext)
useEffect(()=>{
getList(dispatch)
    },[dispatch]);

    const handleDelete=(id)=>{

    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 120 },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'type', headerName: 'Type', width: 120 },
        {field: 'action',headerName: 'Action', width: 160,
    renderCell:(params)=>{
        return(<>
     <div className="arrangeButtons">
    
 <Link to= {`/list/ ${params.row._id} `} state={{movie:params.row}}> 
    <button className="productListEdit">Edit</button>
    </Link>
    <DeleteOutlinedIcon className="productListDelete"
      onClick={()=>handleDelete(params.row._id)} 
    />

            </div>
            </>
        )
    }},
        
      ];

    return(
        <>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="productList" style={{ height: 700, width: '100%' }}>
<DataGrid 
disableSelectionOnClick
        rows={list}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowId={(rows)=>rows._id}
      />
        </div>
        </div>
        </>
    )
}
export default ListList;