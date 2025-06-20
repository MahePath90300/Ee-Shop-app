import { useEffect, useState } from "react";
import { getCartData, removeCartData } from "../../Services/service";
import "./AddToCart.css";
import Rating from "../Rating/Rating";

function AddToCart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await getCartData();
      setCartItems(res.data.result);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeCartItem = async (_id) => {
    try {
      await removeCartData(_id);
      await fetchCart();
    } catch (err) {
      console.error("Error removing cart item:", err);
    }
  };

  return (
    <div className="cart-data">
      <div className="heading">
        <h2>Cart Details</h2>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item._id} className="cart-products">
            <div className="image-section">
              <img src={item.product_image} width={280} height={240} alt={item.title} />
            </div>
            <div className="product-description">
              <h4 className="item-product-name">{item.title}</h4>
              <Rating
                rating={item.rating?.rate}
                ratingNum={item.rating?.rate}
                reviews={item.rating?.count}
              />
              <b className="product-price">${item.price}</b>
              <div className="remove-button">
                <button onClick={() => removeCartItem(item._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-products-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0xV4yqHPvnH6OKUIURaIOs8zrg28XFw09Q&s"
            width={280}
            height={220}
            alt="Empty cart"
          />
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default AddToCart;

