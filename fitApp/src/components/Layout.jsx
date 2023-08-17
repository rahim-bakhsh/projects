import { useState, useEffect } from "react";

function Layout(props) {
  const [hide, setHide] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        setHide(false);
      } else {
        setHide(true);
      }
      [...document.getElementsByClassName("nav-link")].forEach((links, index) =>
        index ? links.classList.remove("active") : links.classList.add("active")
      );

      // remember current page location to use in the next move
      return setLastScrollY(window.scrollY);
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
    <section className="container mx-auto py-12 px-10 lg:px-20 md:px-2 sm:px-15">
      {props.children}
      <button
        onClick={() => {
          scrollTo({ top, behavior: "smooth" });
        }}
        style={{ opacity: hide ? "0" : "1" }}
        className=" fixed bottom-5 right-5 rounded-full h-12 w-12 bg-gradient-to-br from-grad-primary to-grad-secondary hover:bg-gradient-to-b hover:from-grad-primary hover:to-grad-secondary text-white ease-in-out duration-500 z-10"
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </section>
  );
}

export default Layout;
