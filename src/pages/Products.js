import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/homepage/Section";
import Footer from "../components/Footer";
import { MainContext } from "../context/MainContext";
import Filters from "../components/products/Filter";

const Products = () => {
  // ];
  const { products } = useContext(MainContext);

  const [category, setCategory] = useState("all");

  console.log(category);

  return (
    <>
      <Navbar />
      <Filters setState={setCategory} />

      {category === "all" ? (
        <Section array={products} />
      ) : (
        <Section
          array={products.filter((product) => product.category === category)}
        />
      )}
      <Footer />
    </>
  );
};

export default Products;
