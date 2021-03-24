import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/PiorGold.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import AlertContext from "../../utils/alertContext";

const Home = () => {
  //1. Hardcode values in the render
  //2. Move the data to state (still hard coded)
  //3. Make an API call to get real data, set it on state.

  // TO USE STATE
  // 1. Import the useState hook from React
  // 2. Create a const to hold state and add default values

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const alert = useContext(AlertContext);

  useEffect(() => {
    axios
      .get("/api/products/featured")
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
        // alert({
        //   message: "No featured products found!",
        //   type: "danger",
        // });
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <img src={Logo} alt="Logo" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row">
        {featuredProducts.map((product) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
