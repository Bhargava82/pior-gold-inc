import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTableRow from "../../components/ProductTableRow/ProductTableRow";

const Admin = () => {
  // 1. hard code the render
  // 2. move the values to this.state
  // 3. make the api call to return the data dynamically.
  // 3a. Import useEffect - when to go get the data.
  // 3b. Import axios
  // 3c. Inside useEffect, make an axios call.
  // 3d. set the response.data on state (setProducts) NEVER DIRECTLY MUTATE STATE

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Admin View</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <table className="striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Featured</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <ProductTableRow
                  key={product._id}
                  {...product}
                  getProducts={getProducts}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
