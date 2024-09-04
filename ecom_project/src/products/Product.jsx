import React, { useEffect, useState } from "react";
import axios from "axios";

import Feature from "./Feature";
import { useNavigate } from "react-router";
function Product() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const fetchapi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    setProducts(response.data);
  };
  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-4  md:m-10 m-3 ">
        {products.map((element) => {
          return (
            <>
              <Feature
                id={element.id}
                image={element.image}
                title={element.title}
                price={element.price}
                nextpage={() => {
                  navigate("/productdetaile/" + element.id);
                }}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Product;
