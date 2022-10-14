import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "../../layout/Navigation";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Images from "./Images";
import MobileNavigation from "../../layout/MobileNavigation";

const MainPage = () => {
  const [mobileView, setMobileView] = useState(false);

  const setViewHandler = () => {
    if (window.innerWidth <= 960) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    setViewHandler();
  }, []);

  window.addEventListener("resize", setViewHandler);

  return (
    <>
      {mobileView ? <MobileNavigation /> : <Navigation />}
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainPage;
