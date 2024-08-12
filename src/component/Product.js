import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Server not responding", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/Products/${id}`)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.error("Server not responding while deleting", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Pizzas List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.image}
                height={300}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Size: {product.size}</p>
                <p className="card-text">Toppings: {product.toppings}</p>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/UpdateProduct/${product.id}`)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
