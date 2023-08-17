function Offer(props) {
  return (
    <section id={props.id} className="offer_section layout_padding">
      <div className="container">
        <div className="box">
          <div className="detail-box text-dark">
            <h2 className="fw-bold">Offers on chocolates</h2>
            <h3 className="fw-bold">
              Get 5% Offer <br />
              any Chocolate items
            </h3>
            <a href="#" className="text-light">Buy Now</a>
          </div>
          <div className="img-box">
            <img src="src/assets/images/offer-img.png" alt="chocolate image" className="w-100" />
          </div>
        </div>
        <div className="btn-box">
          <a href="#">
            <span>See More</span>
            <img src="src/assets/images/color-arrow.png" alt="link arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Offer;
