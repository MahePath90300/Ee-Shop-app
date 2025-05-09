import Header from "../../Header/Header";
import Categories from "../../Categories/Categories";
import Banner from "../../Banner/Banner";
import ProductDetails from "../../productDetaills/product-detaills";
import ProductCard from "../../ProductCard/Product-card";
import Footer from "../../Footer/Footer";
function Home(){
    return <div>
  <Categories />
  <Banner />
  <ProductDetails />
  <ProductCard/>
  {/* <Footer/> */}
    </div>
}
export default Home;