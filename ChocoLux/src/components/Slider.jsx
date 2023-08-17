import { useEffect, useState } from "react";
import { carouselData } from "../assets/data";
function Slider(props) {
  const [slides, setSlides] = useState(carouselData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setSlides(carouselData);
  }, [carouselData]);

  useEffect(() => {
    const lastIndex = carouselData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, carouselData]);

  useEffect(() => {
    const autSlider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(autSlider);
  }, [index]);

  const carousel = slides.map((slide, slideIndex) => {
    const { title, name, img } = slide;
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
      <div className={`slide-item ${position}`} key={slideIndex}>
        <div className="section-center mx-auto mt-5">
          <div className="row justify-content-between align-items-center ms-4 ">
            <div className="col-md-6">
              <div className="detail_box">
                <h1 className="fw-bold">
                  {title} <br />
                  <span>{name}</span>
                </h1>
                <a href="#">
                  <span>Read More</span>
                  <img src="src/assets/images/white-arrow.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5 ms-auto mh-auto">
              <div className="img-box mx-auto">
                <img src={img} alt={name} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id={props.id} className="slider_section text-light pt-3">
        <div className="row align-items-center">
          {carousel}
          <div className="carousel-btn-box position-absolute d-flex">
            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => setIndex(index - 1)}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={() => setIndex(index + 1)}
            >
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
    </section>
  );
}

export default Slider;
