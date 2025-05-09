import "./Signin.css";
import authContext from "../../../Context/Auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { verifyLoginDetails } from "../../Services/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const { logIn } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  let loginData = { email, password };

  console.log(token);
  localStorage.setItem("token", JSON.stringify(token));

  function submitLoginDetails(e) {
    verifyLoginDetails(loginData, setToken);
    setToken(token);
    setTimeout(() => {
      toast.success(token.message);
    }, 500);
    setTimeout(() => {
      logIn();
    }, 2000);
  }

  return (
    <div className="signin-main">
      <div className="signin-sub">
        <div className="form-section">
          <span className="signin-img-sec">
            <img
              src="./src/assets/ee-shop-logo.png"
              width={"150px"}
              height={"82px"}
            />
          </span>
          <h2 className="signin-h2">Sign In</h2>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
          />
          <button className="button-signin" onClick={submitLoginDetails}>
            Sign In
          </button>
          <h4 className="sigin-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </h4>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
