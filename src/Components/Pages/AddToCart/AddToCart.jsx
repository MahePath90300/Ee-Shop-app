import { useEffect, useState } from "react";
import { getCartData, removeCartData } from "../../Services/service";
import "./AddToCart.css";
import Rating from "../Rating/Rating";

function AddToCart() {
  let [state, setState] = useState([]);
  useEffect(() => {
    getCartData(setState);
  }, []);

  function removeCartItem(_id){
   let product_id = _id
  removeCartData(product_id);
  getCartData(setState);
  }
  return (
    <div className="cart-data">
      <div className="heading">
        <h2>Cart Details</h2>
      </div>
      {state.length>0 ? state.map((item) => {
        return (
          <div className="cart-products">
            <div className="image-section">
              <img src={item.product_image} width={280} height={240} />
            </div>
            <div className="product-description">
              <h4 className="item-product-name">{item.title}</h4>
              <div>
                <Rating
                  rating={item.rating.rate}
                  ratingNum={item.rating.rate}
                  reviews={item.rating.count}
                />
              <b className="product-price">${item.price}</b>
              </div>
              <div className="remove-button">
                <button onClick={()=>{
                  removeCartItem(item._id)
                }}>Remove</button>
              </div>
            </div>
          </div>
        );
        
      }
      ):(

        <div className="no-products-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0xV4yqHPvnH6OKUIURaIOs8zrg28XFw09Q&s" width={280} height={220}/>
        <p>Your cart is empty</p>
        </div>
      )
      }
    </div>
  );
}

export default AddToCart;
