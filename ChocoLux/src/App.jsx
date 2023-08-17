import { useState, useEffect } from "react";
import React from "react";
import "./bootstrap.min.css";
import "./App.css";

// import design files
import "./assets/css/font-awesome.min.css";
import "./assets/css/responsive.css";
// import components
import Slider from "./components/Slider";
import About from "./components/About";
import Products from "./components/Product";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
// import "./assets/js/custom"

function App() {
  const [hide, setHide] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        // if scroll down hide the navbar
        setHide(false);
      } else {
        // if scroll up hide the navbar
        setHide(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <main className="text-dark">
      <Slider id="top" />
      <About id="about-section" />
      <Products id="products" />
      <Offer id="client-openion" />
      <Testimonial id="client-openion" />
      <Contact id="contuct-us" />

      <button
        onClick={() => {
          scrollTo(top);
        }}
        style={{ opacity: hide ? "0" : "1" }}
        className="back-to-top position-fixed btn btn-outline-dark rounded-3 text-light"
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </main>
  );
}

export default App;
