import "./movielist.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { useContext, useEffect } from "react";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import { MovieContext } from "../../../context/movieContext/movieContext";
import { deleteMovies, getMovies } from "../../../context/movieContext/apiCalls";

const MovieList=()=>{
    
    const {movies, dispatch}=useContext(MovieContext)
    useEffect(()=>{
getMovies(dispatch)
    },[dispatch])
    const handleDelete=(id)=>{
deleteMovies(id, dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'Movie', width: 200, 
    renderCell:(params)=>{
        return(
            <div className="productListProfile">
                <img src={params.row.imgCoverPage} className="productListImg"
                alt=""/>
                {params.row.title}
            </div>
        )
    } },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'Year', width: 120 },
    { field: 'limit', headerName: 'Limit', width: 120 },
    { field: 'isSeries', headerName: 'isSeries', width: 120 },
        


        {field: 'action',headerName: 'Action', width: 160,
    renderCell:(params)=>{
        return(<>
     <div className="arrangeButtons">
    
 <Link to= {`/movie/ ${params.row._id} `} state={{movie:params.row}}> 
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
        rows={movies}
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
export default MovieList;