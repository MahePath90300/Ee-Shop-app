import { useNavigate } from "react-router-dom";
import "./product.css";
import axios from "axios";
let getToken = localStorage.getItem("token");
let parsedToken = JSON.parse(getToken);
let token = parsedToken.tokenValue;

function Product({image,title,price,id, product}) {
    let navigate = useNavigate();
    console.log(id);
   function sendProductData(){
   axios.post("http://localhost:6565/api/carts/addCartData", product,
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
  ).then((res)=>{
  }).catch((error)=>{
    throw Error(error)
  })
 }
  return (
    <>
        <div className="card">
                <img src={image} height={320} width={270}/>
                <h2>{title}</h2>
                <p>${price}</p>
                <div className="buttons-div">
                  <button className="product-details-button" onClick={()=>{
                   navigate(`/productdetails/${id}`)
                  }}>Product Details</button>
                  <button className="add-to-card-button" onClick={sendProductData}>Add to cart</button>
                </div>
            </div>
        </>
  )
}

export default Product;