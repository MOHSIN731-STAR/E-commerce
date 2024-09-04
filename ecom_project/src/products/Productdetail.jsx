import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
const ProductDetail = () => {
  const [products, setProducts] = useState();

  const param = useParams();
  const dispatch = useDispatch();

  const fetchapi = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${param.id}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchapi();
  });
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {products ? (
        <div className="">
          <div className="flex md:flex-row gap-5 border md:ml-80 mr-5 mt-4 rounded-lg shadow">
            <div>
              <img
                src={products.image}
                alt={products.title}
                className="md:w-60 ml-3 mt-12"
              />
            </div>
            <div className="m-8">
              <h1>{products.title}</h1>
              <p>{products.description}</p>
              <h3>RS: {products.price}</h3>

              <br />
              <div>
                <button
                  className="bg-blue-500 p-3 rounded text-white text-center font-bold shadow"
                  onClick={() => handleAddToCart(products)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
};

export default ProductDetail;
