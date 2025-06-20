import { useNavigate } from "react-router-dom";
import "./product.css";
import axios from "axios";
import { useEffect, useState } from "react";

const token = JSON.parse(localStorage.getItem("token"))?.tokenValue;

function Product({ product, state, fetchCart }) {
  const [inCart, setInCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const exists = state.some((item) => item.product_id === product.product_id);
    setInCart(exists);
  }, [state, product.product_id]);

  const sendProductData = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:6565/api/carts/addCartData", product, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInCart(true);
      fetchCart();
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async () => {
    try {
      await axios.delete(
        `http://localhost:6565/api/carts/removeCartData/${product.product_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setInCart(false);
      fetchCart();
    } catch (error) {
      console.error("Remove from Cart Error:", error);
    }
  };

  return (
    <div className="card">
      <img
        src={product.product_image}
        height={320}
        width={270}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <div className="buttons-div">
        <button
          className="product-details-button"
          onClick={() => navigate(`/productdetails/${product.product_id}`)}
        >
          Product Details
        </button>

        <button
          className={inCart ? "remove-from-cart-btn" : "add-to-cart-btn"}
          onClick={inCart ? removeFromCart : sendProductData}
          disabled={loading}
        >
          {inCart ? "❌ Remove from Cart" : "🛒 Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
