import axios from "axios";


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
console.log(token)
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