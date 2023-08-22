import Carousel from "./Carousel";
import Button from "./ButtonGradient";
function Home() {
  return (
    <section
      className="hero w-full h-full relative bg-no-repeat mb-24"
      id="home"
    >
      <div className="hero-header lg:pt-52 md:pt-48 pt-40">
        <div className="lg:px-20 px-7 md:px-17 sm:px-15">
          <div className="flex lg:flex-row md:flex-row lg:items-start md:justify-between flex-col align-center justify-center gap-10">
            <div className="lg:w-8/12 md:w-7/12 md:text-start text-center lg:text-start">
              <h1
                className="text-4xl md:text-3xl sm:text-3xl font-bold leading-tight text-white mb-4"
                // data-aos="slide-down"
                // data-aos-delay="100"
              >
                The Revolutionary App That Helps To Control Your Own Fitness
              </h1>
              <p
                className="text-white w-10/12 mx-auto lg:mx-0 md:mx-0 pb-3"
                // data-aos="slide-down"
                // data-aos-delay="50"
              >
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                Sit diam sit justo amet ipsum vero ipsum clita lorem
              </p>
              <div className="pt-7">
                <Button
                  currentProperties="py-3 lg:px-10 md:px-8 sm:px-14 mr-5 bg-gradient-to-br from-grad-primary to-grad-secondary"
                  afterProperties="after:from-grad-secondary after:to-grad-primary"
                >
                  Read More
                </Button>

                <Button
                  currentProperties="py-3 lg:px-10 md:px-8 sm:px-14 mr-5 bg-gradient-to-br from-grad-primary to-grad-secondary"
                  afterProperties="after:from-grad-secondary after:to-grad-primary"
                  // aos="slide-left"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div
              className="lg:w-4/12 md:w-4/12 d-flex justify-start lg:items-start"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="w-full">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
