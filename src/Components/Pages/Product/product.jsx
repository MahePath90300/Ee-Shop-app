import { useNavigate } from "react-router-dom";
import "./product.css";

function Product({image,title,price,id}) {
    let navigate = useNavigate();
    console.log(id);
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
                  <button className="add-to-card-button">Add to cart</button>
                </div>
            </div>
        </>
  )
}

export default Product;