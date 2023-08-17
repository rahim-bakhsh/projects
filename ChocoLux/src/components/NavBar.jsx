import { useEffect, useState } from "react";
import { pagelinks } from "../assets/data";

function NavBar() {
  const [links, setLinks] = useState(pagelinks);
  const [isNavAppear, setIsNavAppear] = useState(false);

  const navLinks = links.map((link, index) => {
    const { url, linkName } = link;
    return (
      <li className="nav-item" key={index}>
        <a href={url} className="nav-link" style={{ height: "3em" }}>
          {linkName} <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  });

  useEffect(() => {
    setLinks(pagelinks);
  }, [pagelinks]);

  return (
    <header id="top" className="px-3 shadow">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container justify-content-between">
          <a className="navbar-brand">ChocoLux</a>
          <button
            className="btn d-none fa fa-bars text-dark"
            type="button"
            id="bars"
            onClick={() => setIsNavAppear(!isNavAppear)}
          ></button>

          <div
            className={`navbar-items d-flex ${isNavAppear && "show bg-dark"}`}
          >
            <ul className="navbar-nav m-auto">{navLinks}</ul>
            <div className="quote_btn-container">
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 text-dark" type="button">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a className="link-dark">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
