import { useEffect, useState } from "react";
import { linksOfNav } from "../assets/data";
import Button from "./ButtonGradient";
function Nav(prop) {
  const [navLinks, setNavLinks] = useState(linksOfNav);
  const [isShow, setShow] = useState(false);

  const links = navLinks.map((navLink, index) => {
    const { link, url } = navLink;
    return (
      <li key={index} className="relative">
        <a
          href={url}
          className={`nav-link px-2 py-1 rounded after:absolute after:left-0 after:right-0 after:-bottom-2 after:mx-auto after:transition-all after:ease-in-out after:duration-300 after:content-[' '] after:h-[2px] after:w-0 after:bg-gradient-to-br after:from-grad-primary after:to-grad-secondary hover:after:w-full ${
            !index && "active"
          }`}
          onClick={(e) => {
            [...document.getElementsByClassName("nav-link")].forEach((link) => {
              link.classList.remove("active");
              e.target.classList.add("active");
            });
          }}
        >
          {link}
        </a>
      </li>
    );
  });

  useEffect(() => setNavLinks(linksOfNav), [linksOfNav]);
  return (
    <nav
      className={`absolute top-0 w-full z-10 bg-inherit text-inherit`}
      id="header"
    >
      <div className={`mx-auto px-2 sm:px-6 lg:px-12 py-3`}>
        <div className="flex h-16 items-center justify-between flex-grow">
          {/* computer navbar */}
          <div
            className="flex flex-1 items-center lg:justify-center"
            id="computer-nav"
          >
            <div className="flex flex-shrink-0 items-center">
              <a href="#" className="text-4xl font-bold">
                <h1
                  className={`${prop.refernce ? "company-logo" : "text-white"}`}
                >
                  FitApp
                </h1>
              </a>
            </div>
            <div className="hidden md:block flex-grow">
              <div className="flex items-center lg:p-4  sm:items-stretch sm:justify-start">
                <div className="flex items-center mx-auto">
                  <ul className="flex ml-4 space-x-4">{links}</ul>
                </div>
                <Button
                  currentProperties="lg:px-8 py-2 lg:text-base sm:text-sm sm:px-5 bg-gradient-to-br from-grad-primary to-grad-secondary"
                  afterProperties="after:from-grad-secondary after:to-grad-primary"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu button--> */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white"
              aria-controls="mobile-menu"
              onClick={() => setShow(!isShow)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isShow ? "hidden" : "block"} `}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.
            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className={`h-6 w-6 hover:text-white ${
                  isShow ? "block" : "hidden"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`h-0 opacity-0 overflow-hidden ease-in-out duration-300 bg-white text-black ${
          isShow && "h-64 opacity-100"
        }`}
        id="mobile-menu"
      >
        <ul className="relative z-10 ml-4 space-y-2 pb-5 text-xl font-semibold text-slate-500">
          {links}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
