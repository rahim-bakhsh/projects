import { useEffect, useState } from "react";
import { monthlyPackage, yearlyPackage } from "../assets/data";
import PricingCard from "./PricingCard";
import AOS from "aos";
function Pricing() {
  const [monthlyPrice, setMonthlyPrice] = useState(monthlyPackage);
  const [yearlyPrice, setYearlyPrice] = useState(yearlyPackage);
  const [isMonthPackAppear, setIsMonthPackAppear] = useState(true);

  useEffect(() => setMonthlyPrice(monthlyPackage), [monthlyPackage]);
  useEffect(() => setYearlyPrice(yearlyPackage), [yearlyPrice]);
  return (
    <div id="pricing">
      <div className="text-center" data-aos="slide-up" data-aos-delay="50">
        <h5 className="text-xl text-primary-gradient font-semibold">
          Pricing Plan
        </h5>
        <h1 className="text-4xl font-bold mb-[3rem]">Choose Your Plan</h1>
      </div>
      <div
        className=""
        data-aos="slide-up"
        data-aos-delay="200"
        // data-aos-duration="700"
      >
        {/* buttons box */}
        <div className="flex p-[2px] items-center text-md font-semibold text-center w-fit  mx-auto rounded-full  bg-gradient-to-br from-grad-primary to-grad-secondary">
          <button
            className={`pr-8 pl-9 py-2.5 rounded-s-full bg-white ${
              isMonthPackAppear &&
              "text-white  bg-gradient-to-br from-grad-primary to-grad-secondary"
            }`}
            onClick={() => setIsMonthPackAppear(true)}
          >
            Monthly
          </button>
          <button
            className={`pr-8 pl-9 py-2.5 bg-white rounded-e-full ${
              !isMonthPackAppear &&
              "text-white  bg-gradient-to-br from-grad-primary to-grad-secondary"
            }`}
            onClick={() => setIsMonthPackAppear(false)}
          >
            Yearly
          </button>
        </div>
        {/* tab box */}
        <div
          className="flex flex-wrap justify-between gap-5 md:gap-4 sm:gap-5 pt-14"
        >
          {isMonthPackAppear
            ? monthlyPrice.map((item) => {
                return (
                  <div
                    className={`lg:w-[32%] md:w-[32%] sm:w-[48%] w-auto relative bg-blue-50 text-start shadow-gray-900 rounded-lg flex-grow
                      `}
                    key={item.id}
                  >
                    <PricingCard packages={item} />
                  </div>
                );
              })
            : yearlyPrice.map((item) => {
                return (
                  <div
                    className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-auto relative bg-blue-50 text-start shadow-gray-900 rounded-lg flex-grow"
                    key={item.id}
                  >
                    <PricingCard packages={item} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
