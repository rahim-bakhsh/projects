import { useState } from "react";
import { pagelinks } from "../assets/data";
function Footer() {
  const [links, setLinks] = useState(pagelinks);

  const footerLinks = links.map((link, index) => {
    const { url, linkName } = link;
    return (
        <a href={url} className="fs-6" key={index}>{linkName}</a>
    );
  });

  return (
    <footer className="footer_section layout_padding2 text-white">
      <div className="container">
        <div className="row info-form-social-row">
          <div className="col-md-8 col-lg-9">
            <div className="info-form w-100">
              <form action="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-secondary border-0 bg-white"
                />
                <button className="text-white border-none">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="social-box">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row info_main_row gap-0 gap-lg-5">
          <div className="col-md-6 col-lg-3">
            <div>
              <h4>Company</h4>
              <p className="vision col-12 col-lg-11 col-md-8  py-4 mb-0 me-4 text-light">
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as
                opposed to
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info-links">
              <h4>Menu</h4>
              <div className="info-links-menu">
                {footerLinks}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h4>Contact Us</h4>
            <div className="info-contact">
              <a href="" className="d-flex">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Location</span>
              </a>
              <a href="" className="d-flex">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call +01 1234567890</span>
              </a>
              <a href="" className="d-flex">
                <i className="fa fa-envelope"></i>
                <span>chocoLux@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div></div> */}
    </footer>
  );
}

export default Footer;
