import axios from "axios";

let getToken = localStorage.getItem("token");
let parsedToken = JSON.parse(getToken);
let token = parsedToken.tokenValue;

export function registerUserData(inputData,setMessage){
    axios.post("http://localhost:8090/api/users/signup",inputData)
    .then((res)=>{
        setMessage(res.data.result)

    })
    .catch((error)=>{
        alert(error)
    })
}

export function verifyLoginDetails(loginCredentials, setToken){
    axios.post("http://localhost:8090/api/users/signin",loginCredentials)
    .then((res)=>{      
       setToken(res.data)
    }).catch((error)=>{
   throw Error(error)
    })
}

export function getProducts(setState){
const getToken = localStorage.getItem("token");
const parsedToken = JSON.parse(getToken);
const token = parsedToken.tokenValue;

axios.get("http://localhost:4040/api/products/getProducts", {
  headers: {
    Authorization: `Bearer ${token}`
  },
}).then((res)=>{
setState(res.data.result)
}).catch((error)=>{
console.log(error)
})
}

export function getCartData(setState){
axios.get("http://localhost:6565/api/carts/getcartdata",{
  headers:{
    Authorization: `Bearer ${token}`
  }
}).then((res)=>{
  setState(res.data.result)
}).catch((error)=>{
console.log(error)
})
}

export function removeCartData(_id){
axios.delete(`http://localhost:6565/api/carts/removeCartData/${_id}`,{
  headers:{
    Authorization: `Bearer ${token}`
  }
}).then((res)=>{
  console.log("Product item deleted");
  getCartData(setState);
}).catch((error)=>{
console.log(error)
})
}