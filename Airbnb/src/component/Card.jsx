import star from "../assets/star.png";

export default function Card(props) {
  return (
    <div className="card rounded-4 shadow">
      <img
        src={props.img}
        alt="related photo"
        className="card-img-top img-thumbnail  rounded-4 "
      />
      <div className="card-body">
        <h6 className="fs-5 d-flex aling-items-center gap-2">
          <img src={star} alt="star rating" />
          {props.rating} ({props.reviewCount}) {props.location}
        </h6>
        <h4 className="fw-normal fs-4 text-secondary">{props.title}</h4>
        <p>
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
