import { Link } from "react-router-dom";
import "./Header.css";
import authContext from "../../Context/Auth";
import { useContext } from "react";

function Header(){
    const {logOut} = useContext(authContext);
    function signout(e){
  logOut()
    }
    return (
        <div className="container">
            <div className="logo">
            <span><img src="./src/assets/ee-shop-logo.png" height={"82px"}/></span>
            {/* <h2>Ee-Shop</h2> */}
            </div>
            <div className="nav-details">
                <Link to="/">Home</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/jewellary">Jewellry</Link>
                <Link to="/mens">Men's</Link>
                <Link to="/womens">Women's</Link>
                <Link to="/kids">Kid's</Link>
            </div>
            <div className="sign-out">
            <Link to="/addtocart"><button><i class="bi bi-cart-check"></i></button></Link>
            
            <i class="bi bi-person-circle"></i>
          <Link to="/"> <button className="hearder-button" onClick={signout}>SignOut</button></Link>
            </div>
        </div>
    )
}
export default Header;