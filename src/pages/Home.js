import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Homepage from "../components/homepage/Homepage";
import Section from "../components/homepage/Section";
import Client from "../components/ClientWrapper";
import { MainContext } from "../context/MainContext";


const Home = () => {
  const { products } = useContext(MainContext);

  return (
    <>
      <Navbar />
      <Homepage />
      <Section
        title={"Our best products"}
        array={products
          .filter((product) => product.rating.rate > 4)
          .slice(0, 3)}
      />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
