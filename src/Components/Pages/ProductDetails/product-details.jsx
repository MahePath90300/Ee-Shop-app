import { useEffect, useState } from "react";
import "./product-details.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const token = JSON.parse(localStorage.getItem("token"))?.tokenValue;

function ProductDetails() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    image: "",
    price: 0,
    category: "",
    description: "",
    rating: {
      rate: 0,
    },
  });
  const {id} = useParams()
  function getProduct(){
    console.log("token",token);
    console.log(id)
   axios.get(`http://localhost:4040/api/products/productdetails/${id}`,{
        headers: { Authorization: `Bearer ${token}` }
      }).then((res)=>{
   console.log(res);
   setProduct(res.data.result)
  }).catch((error)=>{
console.log(error)
  })
}
  useEffect(()=>{
getProduct(setProduct)
  },[]);
  return (
    <div className="products-details-main">
      <div className="products-details">
        <div className="image-section">
          <img src={product.image} width={"100%"} height={"450px"} alt="" />
        </div>
        <div className="details-section">
          <dl>
            <dt>Product Id</dt>
            <dd></dd>
            <dt>Product Title</dt>
            <dd></dd>
            <dt>Product Price</dt>
            <dd>$</dd>
            <dt>Product Rating</dt>
            <dd></dd>
            <dt>Product Description</dt>
            <dd></dd>
          </dl>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;