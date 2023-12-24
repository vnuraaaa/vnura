import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  
  return (
    <MainContext.Provider value={{ products, categories }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
