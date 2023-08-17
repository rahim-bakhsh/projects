import { useEffect, useState } from "react";
import { footerLinks } from "../assets/data";
function Footer() {
  const [links, setLinks] = useState(footerLinks);
  useEffect(() => setLinks(footerLinks), [footerLinks]);

  const quickLinks = links.map((link, index) => {
    const { linkName, path } = link;
    return (
      <li key={index + 1} className="mb-3 w-11/12">
        <a
          className="footer-link before:relative before:content-['\f105'] before:font-extrabold before:mr-2 w-full hover:tracking-wider ease-in-out duration-500"
          href={path}
        >
          {linkName}
        </a>
      </li>
    );
  });

  return (
    <footer
      className="footer w-full h-full bg-no-repeat bg-primary text-white wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container mx-auto py-12 px-10 lg:px-[6rem] sm:px-17 md:px-10">
        <div className="py-5">
          <div className="flex flex-wrap align-start justify-between gap-y-16">
            <div className="md:w-6/12 lg:w-3/12">
              <h4 className="text-2xl font-semibold mb-7">Address</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                  York, USA
                </li>
                <li>
                  <i className="fa fa-phone-alt me-3"></i>+012 345 67890
                </li>
                <li>
                  <i className="fa fa-envelope me-3"></i>info@example.com
                </li>
                <li className="flex pt-2">
                  <a
                    className=" mr-1 w-10 h-10 flex items-center justify-center text-white border-[1px] border-slate-400/50 rounded-full duration-300 hover:text-blue-200 hover:border-slate-400/100"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className=" mr-1 w-10 h-10 flex items-center justify-center text-white border-[1px] border-slate-400/50 rounded-full duration-300 hover:text-blue-200 hover:border-slate-400/100"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className=" mr-1 w-10 h-10 flex items-center justify-center text-white border-[1px] border-slate-400/50 rounded-full duration-300 hover:text-blue-200 hover:border-slate-400/100"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className=" mr-1 w-10 h-10 flex items-center justify-center text-white border-[1px] border-slate-400/50 rounded-full duration-300 hover:text-blue-200 hover:border-slate-400/100"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-6/12 lg:w-3/12">
              <h4 className="text-2xl font-semibold mb-7">Quick Link</h4>
              <ul>{quickLinks}</ul>
            </div>
            <div className="md:w-6/12 lg:w-3/12">
              <h4 className="text-2xl font-semibold mb-7">Popular Link</h4>
              <ul>{quickLinks}</ul>
            </div>
            <div className="md:w-6/12 lg:w-3/12">
              <h4 className="text-2xl font-semibold mb-7">Newsletter</h4>
              <p className="text-justify">
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
              <div className="relative w-100 mt-6">
                <input
                  className="rounded-lg w-full h-8 border-0 rounded-pill w-100 ps-4 pe-5 active: outline-[var(--secondary)]"
                  type="text"
                  placeholder="Your Email"
                />
                <button
                  type="button"
                  className="btn shadow-none absolute top-0 end-0 mt-1 me-3"
                >
                  <i className="fa fa-paper-plane text-primary-gradient fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container border-t py-3 border-gray-400">
          <div className="flex lg:justify-between justify-center flex-wrap">
            <div className="lg:w-6/12 md:w-full lg:text-start text-center  mb-3">
              &copy;
              <a className="border-b" href="#">
                FitApp
              </a>
              , All Right Reserved. powered in
              <a className="border-b ms-2" href="react.dev">
                React App
              </a>
            </div>
            <div className="lg:w-6/12 md:w-full text-center">
              <div className="flex items-center gap-4 lg:justify-end md:justify-center">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  {
  }
}

export default Footer;
