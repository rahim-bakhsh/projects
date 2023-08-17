import { useEffect} from "react";
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
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef(null);
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     { rootMargin: "-10px" }
  //   );
  //   console.log(isIntersecting);
  //   observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     headerRef.current.style = {
  //       backgroundColor:'white',
  //       position:'fixed'
  //     }
  //   } else {
  //     ref.current.querySelectorAll("div").forEach((el) => {
  //       el.classList.remove("slide-in");
  //     });
  //   }
  // }, [isIntersecting]);

  return (
    <>
      <header id="head">
        <Nav />
      </header>
      <main className="">
        <Home />
        <Layout>
          <About />
          <Features />
          <Pricing />
          <Testimonial />
          <Contact />
        </Layout>
      </main>
      <Footer />
    </>
  );
}

export default App;
