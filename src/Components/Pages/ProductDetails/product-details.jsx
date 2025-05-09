import { useEffect, useState } from "react";
import "./product-details.css";
import axios from "axios";
import { useParams } from "react-router-dom";

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
   axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
   console.log(res);
   setProduct(res.data)
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
            <dd>{product.id}</dd>
            <dt>Product Title</dt>
            <dd>{product.title}</dd>
            <dt>Product Price</dt>
            <dd>${product.price}</dd>
            <dt>Product Rating</dt>
            <dd>{product.rating.rate}</dd>
            <dt>Product Description</dt>
            <dd>{product.description}</dd>
          </dl>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;