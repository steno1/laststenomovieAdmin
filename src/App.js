import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css';
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  //Navigate,

} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";


function App() {
  return (
    <BrowserRouter>
<Topbar/>
<div className="container">
<Sidebar/>
      <Routes>
      
    <Route path="/" 
      element={<Home className="App" />}
    />
    <Route path="/users" 
      element={<UserList/>}
    />
    <Route path="/user/:userid" 
      element={<User/>}
    />
       
    
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
