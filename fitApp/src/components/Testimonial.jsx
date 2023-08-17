import { useEffect, useState } from "react";
import { reviewData } from "../assets/data";
// / owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  const [clientReview, setClientReview] = useState(reviewData);
  useEffect(() => setClientReview(reviewData), [reviewData]);
  return (
    <div className="py-32 testimonial-carousel" id="review">
      <div className="text-center pb-5" data-aos="slide-up" data-aos-delay="50">
        <h5 className="text-xl text-primary-gradient font-semibold">
          Testimonial
        </h5>
        <h1 className="text-4xl font-bold mb-[3rem]">What Say Our Clients!</h1>
      </div>
      <OwlCarousel
        className="owl-theme overflow-hidden"
        loop
        center
        margin={10}
        nav={true}
        dots={false}
        smartSpeed={1000}
        // autoplay
        autoplaySpeed={3500}
        autoplayTimeout={5000}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        }}
        data-aos="zoom-in"
      >
        {clientReview.map((review) => {
          const { id, name, img, profession, rate, openion } = review;
          return (
            <div key={id} className="item">
              <div className="w-full p-10 rounded-3xl">
                <div className="flex lg:flex-nowrap lg:gap-0 gap-5 flex-wrap items-center mb-4">
                  <div className="w-20">
                    <img
                      className="bg-white flex-shrink-0 p-1.5 w-full rounded-md"
                      src={img}
                    />
                  </div>
                  <div className="ms-7">
                    <h5 className="mb-2">{name}</h5>
                    <p className="mb-2">{profession}</p>
                    <div>
                      <small className="fa fa-star text-orange-500"></small>
                      <small className="fa fa-star text-orange-500"></small>
                      <small className="fa fa-star text-orange-500"></small>
                      <small className="fa fa-star text-orange-500"></small>
                      <small className="fa fa-star text-orange-500"></small>
                    </div>
                  </div>
                </div>
                <p className="text-justify">{openion}</p>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Testimonial;
