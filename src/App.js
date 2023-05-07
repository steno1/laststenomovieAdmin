import {useContext} from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css';
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  //Navigate,

} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/newUser";
import MovieList from "./components/movieList/movieList";
import Movie from "./components/movies/movie";
import NewProduct from "./components/pages/newProduct/newProduct";
import Login from "./components/pages/login/Login";
import ListList from "./components/list/list/ListList";
function App() {
  const {user}=useContext(AuthContext);
  return (
    <BrowserRouter>
    
<Routes>

<Route path="/" 
      element={!user? <Home/>:<Navigate to="/login" /> }
/>
    <Route path="/login" 
      element={user? <Login/>:<Navigate to="/" /> }

    />
    {user && (
<>
  
   
     {/* user list*/}
    <Route path="/users" 
      element={<UserList/>}
    />
    <Route path="/user/:userid" 
      element={<User/>}
    />
    <Route path="/user/newUser" 
      element={<NewUser/>}
    />
    {/* product list*/}

    <Route path="/movies" 
      element={<MovieList/>}
    />
    <Route path="/movie/:movieid" 
      element={<Movie/>}  />
      
      <Route path="/Products/newProduct" 
      element={<NewProduct/>}  />

       

<Route path="/list/:listid" 
      element={<Movie/>}  />
      
      <Route path="/Products/newProduct" 
      element={<NewProduct/>} />

      <Route path="/lists" 
      element={<ListList/>}  />

</>

)}

     </Routes>

    </BrowserRouter>
  
  );
}

export default App;
