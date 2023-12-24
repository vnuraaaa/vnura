import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../components/about/Image";
import about1 from "../assets/about-img.png";
import Text from "../components/about/Text";

const About = () => {
  return (
    <>
      <Navbar />
      <Text tittle={"ABOUT OUR BEAUTY SOTORE"} />
      <Image photo={about1} />

      <Text
        paragraph={
          "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }
      />

      <Footer />
    </>
  );
};

export default About;
