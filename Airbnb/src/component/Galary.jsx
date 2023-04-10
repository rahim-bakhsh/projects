export default function Galary(data) {
  return (
    <div className="mx-4 mt-4">
      <img src={data.img} className="col-12 col-md-8 d-block mx-auto my-5" />
      <div className="col-12 col-lg-5 pt-5 pb-2">
        <h1 className="display-5 fw-bold">{data.title}</h1>
        <p>{data.detail}</p>
      </div>
    </div>
  );
}
