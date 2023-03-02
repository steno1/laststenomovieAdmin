import "./userlist.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Topbar from "../../topbar/Topbar";
import { DataGrid } 
from '@mui/x-data-grid';
import { userRows } from "../../../dummyData";
import {Link} from "react-router-dom"
import { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";



const UserList=()=>{
    const [data, setData]=useState(userRows)
    const handleClick=(id)=>{
    setData(data.filter((item)=>{
        return(
            item.id !==id
        )
    }))
}

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, 
    renderCell:(params)=>{
        return(
            <div className="userListProfile">
                <img src={params.row.Avatar} className="userListImg"
                alt=""/>
                {params.row.username}
            </div>
        )
    } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        {field: 'transaction',headerName: 'Transactions', width: 160,},
        {field: 'action',headerName: 'Action', width: 160,
    renderCell:(params)=>{
        return(
            <div className="arrangeButtons">
            <Link to={"/user/"+params.row.id}>
    <button className="userListEdit">Edit</button>
    </Link>
    <DeleteOutlinedIcon className="userListDelete"
      onClick={()=>handleClick(params.row.id)} 
    />

            </div>
        )
    }},
        
      ];

    return(
        <>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="userlist">
        
        <div style={{ height: 700, width: '100%' }}>
      <DataGrid disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
        </div>
        </div>
        </>
    )
}
export default UserList;