import { useState, useEffect } from "react";
import { clientOpenion } from "../assets/data";

function Testimonial(props) {
  const [slides, setSlides] = useState(clientOpenion);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = clientOpenion.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, clientOpenion]);

  // useEffect(() => {
  //   const autSlider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(autSlider);
  // }, [index]);

  useEffect(() => {
    setSlides(clientOpenion);
  }, [clientOpenion]);

  const carousel = slides.map((slide, slideIndex) => {
    const { id, clientName, img, text } = slide;
    let position = "next-slide";
    if (slideIndex === index) {
      position = "active-slide";
    }
    if (
      slideIndex === index - 1 ||
      (index === 0 && slideIndex === slides.length - 1)
    ) {
      position = "last-slide";
    }
    return (
      <div className={`slide-item h-100 ${position}`} key={slideIndex}>
        <div className="box">
          <div className="img-box">
            <img src={img} alt={`${clientName}picture`} className="w-100" />
          </div>
          <div className="detail-box">
            <h4>{clientName}</h4>
            <p>{text}</p>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id={props.id} className="client_section h-100">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 ms-auto">
            <div className="img-box sub_img-box">
              <img
                src="/images/client-chocolate.png"
                alt=""
                className="w-100"
              />
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="client-container text-white position-relative">
              <div className="heading-container">
                <h2>Testimonial</h2>
              </div>
              <div className="position-relative h-100">
                <div className="row" style={{ height: "fit-content" }}>
                  {carousel}
                </div>
                <div className="carousel-btn-box">
                  <button
                    className="carousel-control-prev"
                    onClick={() => setIndex(index - 1)}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    onClick={() => setIndex(index + 1)}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
