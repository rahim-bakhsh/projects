import { memo } from "react";
import Button from "./ButtonGradient";
function PricingCard(props) {
  let { id, bundle, packType, bundleVision, price, packageProperties } =
    props.packages;
  return (
    <div className="bg-blue-50 rounded-2xl py-3 px-4 pb-4">
      <div className="border-b border-gray-300 mb-6 pb-6">
        <h4 className="text-2xl text-primary-gradient font-semibold mb-1">
          {bundle}
        </h4>
        <span className="text-sm text-gray-400 font-[500]">{bundleVision}</span>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-3">
          <small className="align-top text-2xl">$</small>
          {price}
          <small className="align-bottom text-base font-semibold ">
            / {packType}
          </small>
        </h1>

        <ul>
          {packageProperties.map((pack, index) => {
            return (
              <li className="flex justify-between mb-3" key={index}>
                <span>{pack}</span>
                <i className="fa fa-check text-primary-gradient pt-1"></i>
              </li>
            );
          })}
        </ul>
        <Button
          currentProperties="bg-gradient-to-br from-grad-primary to-grad-secondary px-8 mt-8 py-2"
          afterProperties="after:from-grad-secondary after:to-grad-primary"
        >
          Get Start
        </Button>
      </div>
    </div>
  );
}

export default memo(PricingCard);
