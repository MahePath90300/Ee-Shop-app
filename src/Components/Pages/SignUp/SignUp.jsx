import "./signup.css";
import { Link } from "react-router-dom";
import { registerUserData } from "../../Services/service";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [gender, setGender] = useState();
  const [message, setMessage] = useState("");

  function sendUserData() {
    const userData = { userName, email, password, gender };
    registerUserData(userData, setMessage);
    setTimeout(() => {
      setMessage(message);
      toast.success(message);
      setUserName(""), setEmail(""), setGender(""), setpassword("");
    }, 1000);
  }
  return (
    <div className="signup-main">
      <div className="signup-sub">
        <div className="form-section">
          <span className="signup-img-section">
            <img
              src="./src/assets/ee-shop-logo.png"
              width={"180px"}
              height={"122px"}
            />
          </span>
          <h2 className="signup-h2">Sign Up</h2>
          <input
            type="text"
            placeholder="User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
          />
          <select className="signup-drop-down"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value={gender}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <button className="button-signup" onClick={sendUserData}>
            Sign Up
          </button>
          <h4 className="signup-text">
            Already have an account? <Link to="/">Log in</Link>
          </h4>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
