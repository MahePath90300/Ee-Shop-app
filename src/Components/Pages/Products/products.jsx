import "./products.css";
import Product from "../Product/product";
import { useEffect, useState } from "react";
import { getProducts } from "../../../Components/Services/service";

function Products({ bannerTitle, img }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    getProducts(setState);
  }, []);
  return (
    <>
      <div className="products">
        <div className="image-container" style={{backgroundImage:`url(${img})`,backgroundColor: 'rgba(179, 157, 157, 0.9)',backgroundBlendMode: 'multiply',backgroundSize: 'cover',}}>
        <div className="info-container">
          <h2>{bannerTitle} Category Products </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            consectetur est nisi optio rerum sit. Repudiandae perferendis autem
            incidunt odio fugit, excepturi ipsum voluptatem, quidem voluptates
            quae qui laboriosam sunt illum itaque quisquam ducimus blanditiis?
            Iure id tempore, temporibus provident vero nihil quaerat? Quibusdam
            a incidunt culpa dolorum facere voluptatum.
          </p>
        </div>
        </div>
        </div>
      <div className="products-data">
        {state.length > 0 &&
          state
            .filter((filteredData) => {
              return filteredData.product_category === bannerTitle;
            })
            .map((products) => {
              return (
                <Product
                  image={products.product_image}
                  title={products.title}
                  price={products.price}
                  id={products.id}
                />
              );
            })}
      </div>
    
    </>
  );
}

export default Products;
