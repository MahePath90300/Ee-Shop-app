import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Pages/Home/home.jsx";
import Mens from "./Components/Pages/Mens/mens.jsx";
import Jewellary from "./Components/Pages/Jewellary/Jewellary.jsx"
import PageNotFOund from './Components/Pages/PageNotFound/pagenotfound.jsx';
import Electronics from './Components/Pages/Electronics/electronics.jsx';
import Header  from './Components/Header/Header.jsx';
import Womens from "./Components/Pages/Womens/womens.jsx"
import ProductDetails from './Components/Pages/ProductDetails/product-details.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AddToCart from './Components/Pages/AddToCart/AddToCart.jsx';
import SignUp from './Components/Pages/SignUp/SignUp.jsx';
import SignIn from './Components/Pages/Signin/Signin.jsx';
import authContext from './Context/Auth.js';
import { useContext, useState } from 'react';

function App() {
// const {isUserLogedIn} = useContext(authContext);
const [state, setState] = useState({
  isUserLoggedIn:false
});

function logIn(){
 setState({
  isUserLoggedIn: true
 })
}

function logOut(){
  setState({
    isUserLoggedIn: false
   })
}



  return (
  <div>    
    <authContext.Provider value={{state, logIn,logOut}}>
    {
      state.isUserLoggedIn && <Header />
    }
    <Routes>
    <Route path={"/"} element={state.isUserLoggedIn ? <Home /> : <SignIn />}/>
    <Route path={"/signup"} element={<SignUp />}/>
    <Route path={"/mens"} element={<Mens />}/>
    <Route path={"/jewellary"} element={<Jewellary />}/>
    <Route path={"/electronics"} element={<Electronics />}/>
    <Route path={"/womens"} element={<Womens />}/>
    <Route path={"*"} element={<PageNotFOund />}/>
    <Route path={"/productdetails/:id"} element={<ProductDetails />}/>
    <Route path={"/addtocart"} element={<AddToCart />}/>
    </Routes>
    {
      state.isUserLoggedIn && <Footer />
    }
    </authContext.Provider>
  </div>
  )
}

export default App;
