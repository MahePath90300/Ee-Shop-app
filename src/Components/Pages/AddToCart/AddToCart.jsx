import { useEffect, useState } from "react";
import { getCartData } from "../../Services/service";
import "./AddToCart.css";
import Rating from "../Rating/Rating";

function AddToCart() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getCartData(setState);
  }, []);
  console.log(state);
  return (
    <div className="cart-data">
      {state.map((item) => {
        return (
          <div className="cart-products">
            <div className="image-section">
              <img src={item.productImage} width={280} height={240} />
            </div>
            <div className="product-description">
              <h4 className="item-product-name">{item.productName}</h4>
              <div>
                <Rating
                  rating={item.productRating.rating}
                  ratingNum={item.productRating.rating}
                  reviews={item.productRating.reviews}
                />
              <b className="product-price">${item.productPrice}</b>
              </div>
              <div className="remove-button">
                <button>Remove</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AddToCart;
