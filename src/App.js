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
import NewUser from "./components/pages/newUser/newUser";
import ProductList from "./components/productList/ProductList";
import Product from "./components/products/Product";
import NewProduct from "./components/pages/newProduct/newProduct";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
    
<Routes>

    <Route path="/" 
      element={<Home/>}
    />
    <Route path="/login" 
      element={<Login />}
    />
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
      element={<ProductList/>}
    />
    <Route path="/Products/:Productid" 
      element={<Product/>}  />
      
      <Route path="/Products/newProduct" 
      element={<NewProduct/>}  />
     </Routes>
    
      
      
    
    
    </BrowserRouter>
  
  );
}

export default App;
