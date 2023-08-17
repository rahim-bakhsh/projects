import { memo } from "react";

function Card(props) {
  const {
    parentClasses,
    imgClasses,
    titleClasses,
    textClasses,
    cardData,
    delay,
    duration,
  } = props;
  const { id, property, explination, iconClasses } = cardData;
  return (
    <div
      className={parentClasses}
      data-aos="slide-up"
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      <div className={imgClasses}>
        <i className={iconClasses}></i>
      </div>
      <h5 className={titleClasses}>{property}</h5>
      <p className={textClasses}>{explination}</p>
    </div>
  );
}
export default Card;
