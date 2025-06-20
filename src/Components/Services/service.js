import axios from "axios";


function getAuthToken() {
  const tokenData = localStorage.getItem("token");
  if (!tokenData) return null;
  return JSON.parse(tokenData).tokenValue;
}

const API = {
  auth: "http://localhost:8090/api/users",
  products: "http://localhost:4040/api/products",
  cart: "http://localhost:6565/api/carts",
};

// let getToken = localStorage.getItem("token");
// let parsedToken = JSON.parse(getToken);
// let token = parsedToken.tokenValue;

export async function registerUserData(inputData,setMessage){
    // axios.post("http://localhost:8090/api/users/signup",inputData)
    // .then((res)=>{
    //     setMessage(res.data.result)

    // })
    // .catch((error)=>{
    //     alert(error)
    // })
      try {
    const res = await axios.post(`${API.auth}/signup`, inputData);
    setMessage(res.data.result);
  } catch (error) {
    alert("Registration Error: " + error);
  }
}

export async function verifyLoginDetails(loginCredentials, setToken){
  //   axios.post("http://localhost:8090/api/users/signin",loginCredentials)
  //   .then((res)=>{      
  //      setToken(res.data)
  //   }).catch((error)=>{
  //  throw Error(error)
  //   })
  try {
    const res = await axios.post(`${API.auth}/signin`, loginCredentials);
    setToken(res.data);
  } catch (error) {
    throw new Error("Login Failed: " + error.message);
  }
}

export async function getProducts(setState){
// const getToken = localStorage.getItem("token");
// const parsedToken = JSON.parse(getToken);
// const token = parsedToken.tokenValue;

// axios.get("http://localhost:4040/api/products/getProducts", {
//   headers: {
//     Authorization: `Bearer ${token}`
//   },
// }).then((res)=>{
// setState(res.data.result)
// }).catch((error)=>{
// console.log(error)
// })
 const token = getAuthToken();
  try {
    const res = await axios.get(`${API.products}/getProducts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setState(res.data.result);
  } catch (error) {
    console.error("Product Fetch Error:", error);
  }
}

export async function getCartData(){
// axios.get("http://localhost:6565/api/carts/getcartdata",{
//   headers:{
//     Authorization: `Bearer ${token}`
//   }
// }).then((res)=>{
//   setState(res.data.result)
// }).catch((error)=>{
// console.log(error)
// })
 const token = getAuthToken();
  try {
    const res = await axios.get(`${API.cart}/getcartdata`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
     console.log(res)
    return res;
   
  } catch (error) {
    console.error("Cart Fetch Error:", error);
    throw error;
  }
}

export async function removeCartData(_id){
// axios.delete(`http://localhost:6565/api/carts/removeCartData/${_id}`,{
//   headers:{
//     Authorization: `Bearer ${token}`
//   }
// }).then((res)=>{
//   console.log("Product item deleted");
//   getCartData(setState);
// }).catch((error)=>{
// console.log(error)
// })
 const token = getAuthToken();
  try {
    const res = await axios.delete(`${API.cart}/removeCartData/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error("Remove Cart Error:", error);
    throw error;
  }
}