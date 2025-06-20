import "./products.css";
import Product from "../Product/product";
import { useEffect, useState } from "react";
import { getProducts, getCartData } from "../../Services/service";

function Products({ bannerTitle, img }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Fetch products
  useEffect(() => {
    getProducts(setProducts);
  }, []);

  // Fetch cart
  const fetchCart = async () => {
    try {
      const res = await getCartData();
      setCartItems(res.data.result); // Adjust if response shape differs
    } catch (err) {
      console.error("Cart fetch error:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <div className="products">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${img})`,
            backgroundColor: "rgba(179, 157, 157, 0.9)",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="info-container">
            <h2>{bannerTitle} Category Products</h2>
            <p>
              Browse the best picks in {bannerTitle} – hand-picked just for you.
            </p>
          </div>
        </div>
      </div>

      <div className="products-data">
        {products
          .filter((p) => p.product_category === bannerTitle)
          .map((product) => (
            <Product
              key={product.product_id}
              product={product}
              state={cartItems}
              fetchCart={fetchCart}
            />
          ))}
      </div>
    </>
  );
}

export default Products;

