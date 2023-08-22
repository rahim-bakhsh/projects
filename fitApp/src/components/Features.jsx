import { useEffect, useState } from "react";
import { featuresData, processData } from "../assets/data";
import Card from "./Card";
import Carousel from "./Carousel";
import Button from "./ButtonGradient";

function Features() {
  const [features, setFeatures] = useState(featuresData);
  const appFeatures = features.map((feature, index) => {
    return (
      <Card
        key={feature.id}
        parentClasses="bg-blue-50 rounded-lg p-8 lg:w-[32%] md:w-[48%]  sm:w-auto hover:drop-shadow-2xl transition ease-in delay-1000 duration-1000 feature-item"
        imgClasses="inline-flex items-center justify-center  bg-gradient-to-br from-grad-primary to-grad-secondary  rounded-full mb-5 w-[60px] h-[60px]"
        titleClasses="mb-2 text-xl font-semibold"
        textClasses="text-gray-500 font-medium text-justify"
        cardData={feature}
        delay={index * 100}
        duration={650}
      />
    );
  });

  useEffect(() => {
    setFeatures(featuresData);
  }, [featuresData]);

  //   proccess setup
  const [process, setProcess] = useState(processData);

  const processStages = process.map((proc, index) => {
    return (
      <Card
        key={proc.id}
        parentClasses="lg:w-[32%] md:w-[48%]  sm:w-[48%] w-auto relative bg-blue-50 text-center shadow-gray-900 pt-8 px-4 pb-5 rounded-lg"
        imgClasses="inline-flex items-center justify-center  bg-gradient-to-tl from-grad-primary to-grad-secondary absolute -top-12 right-[36%] left-[36%] h-20 w-20 mx-auto z-10  rounded-full shadow"
        titleClasses="mt-8 mb-6 text-xl font-semibold"
        textClasses="text-gray-500 font-medium"
        cardData={proc}
        delay={index * 100}
      />
    );
  });

  useEffect(() => {
    setProcess(processData);
  }, [processData]);

  return (
    <>
      {/* Awesome Features */}
      <div className="py-16" id="feature">
        <div className="text-center" data-aos="zoom-in">
          <h5 className="text-xl text-primary-gradient font-semibold mb-2">
            App Features
          </h5>
          <h1 className="text-4xl lg:text-4xl md:text-3xl font-bold mb-[3rem]">
            Awesome Features
          </h1>
        </div>
        <div className="flex flex-wrap justify-between gap-y-5">
          {appFeatures}
        </div>
      </div>
      {/* screenshots */}
      <div className="py-[6rem]">
        <div className="flex flex-col lg:flex-row md:flex-row md:items-start lg:items-start gap-16 lg:gap-10  items-center">
          <div
            className="lg:w-8/12 mt-12 lg:pr-10"
            data-aos="slide-up"
            data-aos-delay="50"
          >
            <h5 className="text-xl text-primary-gradient font-semibold mb-4">
              Screenshot
            </h5>
            <h1 className="text-4xl lg:text-4xl md:text-3xl font-bold mb-5">
              User Friendly interface And Very Easy To Use Fitness App
            </h1>
            <div className="mb-5">
              <p className="mb-5">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit clita duo justo eirmod magna dolore erat amet
              </p>
              <ul className="list-image-none">
                <li>
                  <i className="fa fa-check text-primary-gradient me-3"></i>
                  Diam dolor diam ipsum et tempor sit
                </li>
                <li>
                  <i className="fa fa-check text-primary-gradient me-3"></i>{" "}
                  Aliqu diam amet diam et eos labore
                </li>
                <li>
                  <i className="fa fa-check text-primary-gradient me-3"></i>{" "}
                  Clita erat ipsum et lorem et sit
                </li>
              </ul>
            </div>
            <Button
              currentProperties="py-3 lg:px-10 md:px-8 sm:px-10 mt-3 bg-gradient-to-br from-grad-primary to-grad-secondary"
              afterProperties="after:from-grad-secondary after:to-grad-primary"
            >
              Read More
            </Button>
          </div>
          <div
            className="lg:w-4/12 mt-8"
            data-aos="slide-up"
            data-aos-delay="150"
          >
            <Carousel />
          </div>
        </div>
      </div>

      {/* proccess or how it work */}
      <div className="py-[6rem]">
        <div
          className="text-center pb-12"
          data-aos="slide-up"
          data-aos-delay="50"
        >
          <h5 className="text-xl text-primary-gradient font-semibold mb-2 ">
            How It Works
          </h5>
          <h1 className="lg:text-4xl md:text-3xl text-4xl font-bold mb-[3rem]">
            3 Easy Steps
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5 gap-y-20">
          {processStages}
        </div>
      </div>
      {/* download */}
      <div className="py-12">
        <div className="container py-12">
          <div className="flex items-center lg:flex-row md:flex-row flex-col gap-14 md:gap-x-8">
            <div className="lg:w-6/12">
              <img
                className="w-full"
                data-aos="slide-up"
                data-aos-delay="50"
                src="./img/about.png"
              />
            </div>
            <div className="lg:w-6/12" data-aos="slide-up" data-aos-delay="250">
              <h5 className="text-xl text-primary-gradient font-semibold mb-2">
                Download
              </h5>
              <h1 className="text-4xl lg:text-4xl md:text-3xl font-bold mb-5 ">
                Download The Latest Version Of Our App
              </h1>
              <p className="mb-5">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit clita duo justo eirmod magna dolore erat amet
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-5">
                <div
                  className="sm:w-6/12"
                  data-aos="zoom-in"
                  data-aos-delay="850"
                >
                  <a
                    href="#"
                    className="flex  bg-gradient-to-br from-grad-primary to-grad-secondary rounded-lg py-6 px-8"
                  >
                    <i className="fab fa-apple fa-3x text-white flex-shrink-0"></i>
                    <div className="ms-3">
                      <p className="text-white">Available On</p>
                      <h5 className="text-white">App Store</h5>
                    </div>
                  </a>
                </div>
                <div
                  className="sm:w-6/12"
                  data-aos="zoom-in"
                  data-aos-delay="850"
                >
                  <a
                    href="#"
                    className="flex  bg-gradient-to-br from-grad-secondary to-grad-primary rounded-lg py-6 px-8"
                  >
                    <i className="fab fa-android fa-3x text-white flex-shrink-0"></i>
                    <div className="ms-3">
                      <p className="text-white">Available On</p>
                      <h5 className="text-white">Play Store</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
