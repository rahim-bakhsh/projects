import { useEffect, useState } from "react";
import { carouselData } from "../assets/data";
function Carousel(props) {
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
    const { title, img } = slide;
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
      <div
        className={`slide-item absolute top-0 left-0 h-full opacity-0 z-10 w-64 ${position}`}
        key={slideIndex}
      >
        <div className="section-center relative w-11/12 mx-auto">
          <img
            src={img}
            alt={title}
            className=" w-full h-full rounded-3xl py-3 px-1"
          />
        </div>
      </div>
    );
  });

  return (
    <section
      id={props.id}
      className="screenshot-carousel relative w-64 h-[500px] overflow-hidden mx-auto"
    >
      {carousel}
    </section>
  );
}

export default Carousel;
