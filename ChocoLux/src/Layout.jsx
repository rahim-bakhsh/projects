import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default (props) => {
  return (
    <>
      <NavBar />
      <section className={props.paddingBottom}></section>
      {props.children}
      <Footer />
    </>
  );
};
