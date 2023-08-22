import Button from "./ButtonGradient";
function About() {
  return (
    <div
      className="flex lg:flex-row lg:items-start lg:gap-10 md:flex-row flex-col gap-y-20 justify-between items-center lg:py-14"
      id="about"
    >
      <div
        className="lg:w-6/12 md:w-6/12"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="50"
      >
        <h5 className="text-primary-gradient font-bold text-xl mb-4 md:mb-2">
          About App
        </h5>
        <h1 className="mb-5 md:mb-4 text-4xl md:text-3xl font-bold font-sans">
          #1 App For Your Fitness
        </h1>
        <p className="mb-5">
          Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
          labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit
          clita duo justo eirmod magna dolore erat amet
        </p>
        <div className="flex gap-4 mb-11">
          <div className="sm:w-6/12" data-aos="zoom-in" data-aos-delay="500">
            <div className="flex">
              <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>

              <div className="ms-3">
                <h2 className="text-3xl md:text-2xl font-bold">1234</h2>
                <p className="text-primary-gradient font-semibold">
                  Active Install
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-6/12" data-aos="zoom-in" data-aos-delay="500">
            <div className="flex">
              <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
              <div className="ms-3">
                <h2
                  className="text-3xl md:text-2xl font-bold"
                  data-toggle="counter-up"
                >
                  1234
                </h2>
                <p className="text-secondary-gradient font-semibold">
                  Clients Reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button
          currentProperties="lg:px-10 py-3 md:px-8 sm:px-10 bg-gradient-to-br from-grad-primary to-grad-secondary"
          afterProperties="after:from-grad-secondary after:to-grad-primary"
          aos="zoom-in"
          delay="700"
        >
          Read More
        </Button>
      </div>
      <div
        className="lg:w-6/12 md:w-5/12 mt-12"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <img className="w-full h-full" src="./img/about.png" />
      </div>
    </div>
  );
}

export default About;
