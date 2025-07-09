import { Link } from "react-router-dom";
import "./Header.css";
import authContext from "../../Context/Auth";
import { useContext } from "react";

function Header() {
  const { logOut, cartItems } = useContext(authContext);

  function signout() {
    logOut();
  }

  return (
    <div className="container">
      <div className="logo">
        <span>
          <img src="./src/assets/ee-shop-logo.png" height={"82px"} />
        </span>
      </div>

      <div className="nav-details">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewellary">Jewellry</Link>
        <Link to="/mens">Men's</Link>
        <Link to="/womens">Women's</Link>
        <Link to="/kids">Kid's</Link>
      </div>

      <div className="cart-button-div">
        <Link to="/addtocart" className="cart-wrapper">
          <button className="cart-button">
            <i className="bi bi-cart-check"></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </button>
        </Link>
      </div>

      <div className="profile-button">
        <i className="bi bi-person-circle"></i>
      </div>

      <div className="sign-out">
        <Link to="/">
          <button className="hearder-button" onClick={signout}>
            SignOut
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
