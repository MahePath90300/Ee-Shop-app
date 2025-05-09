import axios from "axios";

export function getProducts(setState){
axios.get("https://fakestoreapi.com/products").then((res)=>{
setState(res.data)
}).catch((error)=>{
console.log(error)
})
}

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
        console.log(res.data.tokenValue)
    setToken(res.data)
    }).catch((error)=>{
    alert("Check credentials");
   throw Error(error)
    })
}