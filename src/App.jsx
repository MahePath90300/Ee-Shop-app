// App.jsx
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Pages/Home/home.jsx";
import Mens from "./Components/Pages/Mens/mens.jsx";
import Jewellary from "./Components/Pages/Jewellary/Jewellary.jsx";
import PageNotFOund from './Components/Pages/PageNotFound/pagenotfound.jsx';
import Electronics from './Components/Pages/Electronics/electronics.jsx';
import Header from './Components/Header/Header.jsx';
import Womens from "./Components/Pages/Womens/womens.jsx";
import ProductDetails from './Components/Pages/ProductDetails/product-details.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AddToCart from './Components/Pages/AddToCart/AddToCart.jsx';
import SignUp from './Components/Pages/SignUp/SignUp.jsx';
import SignIn from './Components/Pages/Signin/Signin.jsx';
import Kids from './Components/Pages/Kids/Kids.jsx';

import { useContext } from 'react';
import authContext from './Context/Auth.jsx';

function App() {
  const { isUserLoggedIn } = useContext(authContext);

  return (
    <div>
      {isUserLoggedIn && <Header />}
      <Routes>
        <Route path="/" element={isUserLoggedIn ? <Home /> : <SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/jewellary" element={<Jewellary />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="*" element={<PageNotFOund />} />
      </Routes>
      {isUserLoggedIn && <Footer />}
    </div>
  );
}

export default App;
