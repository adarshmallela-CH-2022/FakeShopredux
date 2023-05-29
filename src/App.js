import "./App.css";
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider, Routes} from "react-router-dom";
import ProductDetails from "./components/Containers/ProductDetails";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// import store from './components/Reduxdemo/store';
// import CakeContainer from './components/Reduxdemo/CakeContainer';
import { Provider } from "react-redux";
import store from "./redux/store";
// import HookscakeContainer from './components/Reduxdemo/HookscakeContainer';
// import HooksIceCream from './components/Reduxdemo/HooksIceCream';
// import NewCakeContainer from './components/cake/NewCakeContainer';
import Headers from "./components/Containers/Headers";
import ProductsListing from "./components/Containers/ProductsListing";
import Categorylisting from "./components/Containers/Categorylisting";
import Categoryproduct from "./components/Containers/Categoryproduct";
import Notfound from "./components/Containers/Notfound";
function App() {
//   console.log();
//   const router=createBrowserRouter(createRoutesFromElements(
//     <Route path="/" element={<Root/>}>
// <Route index element={<ProductsListing/>}/>
// <Route path="/product/productId" element={<ProductsListing/>}/>
//     </Route>
//   ));
//   const Root=()=>{
//     return 
//   }
const isAdmin=true;
  return (
    // // <Provider store={store}>
    // // <div className="App">
    // //   <header className="App-header">
    // //     <HookscakeContainer/>
    // //     <HooksIceCream/>
    // //     <NewCakeContainer/>
    // //   </header>
    // // </div>
    // // </Provider>
    <Provider store={store}>
    <BrowserRouter>
    <div className="header">
    <Headers/>
    <div className="topnav">
    {isAdmin?<div><Link to="/">Home</Link>
    <a href="/products">Products</a><a href="/category">category</a><a href="/users">Users</a></div>
:
<div><Link to="/">Home</Link>
  <a href="/products">Products</a><a href="/category">category</a></div>}
  

 
  
</div>
    <div className="tapnav">
     
{isAdmin ?<Routes>
  <Route path="/Users"></Route>
  <Route path="/products" element={<ProductsListing/>}></Route>
  <Route path="/product/:productId" element={<ProductDetails/>}></Route>
     <Route path="/category" element={<Notfound/>}></Route>
     <Route path="/category/:item" element={<Categoryproduct/>}></Route>
   <Route path="/category" element={<Categorylisting/>}></Route></Routes> :<Routes>
    
   <Route path="/" element={<ProductsListing/>}></Route>
   <Route path="/products" element={<ProductsListing/>}></Route>
   <Route path="/product/:productId" element={<ProductDetails/>}></Route>
      <Route path="/category" element={<Notfound/>}></Route>
      <Route path="/category/:item" element={<Categoryproduct/>}></Route>
    <Route path="/category" element={<Categorylisting/>}></Route>
   </Routes>
    }
    
    </div>
    </div>
    </BrowserRouter>
      
  
       
     
    </Provider>
  );
}

export default App;
