import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// styles
import "./App.css";
// components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  // for aos Animation
  const aosInit = () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    return new AOS.refresh();
  };

  useEffect(() => {
    window.addEventListener("load", aosInit);
    AOS.refresh();
  }, []);

  // intersection
  const myRef = useRef();
  const [isNavVisible, setIsNavVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsNavVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <header
        id="head"
        className={
          isNavVisible
            ? `sticky top-0 z-20 w-full ease-in-out duration-500 bg-[whitesmoke] drop-shadow-xl`
            : "text-white "
        }
      >
        <Nav refernce={isNavVisible} />
      </header>
      <main className="">
        <Home />
        <Layout>
          <section ref={myRef}>
            <About />
            <Features />
            <Pricing />
            <Testimonial />
            <Contact />
          </section>
        </Layout>
      </main>
      <Footer />
    </>
  );
}

export default App;
