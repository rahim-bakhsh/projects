import { useEffect, useState } from "react";
import { productsData } from "../assets/data";

function Products(props) {
  const [products, setProducts] = useState(productsData);

  const productsList = products.map((product) => {
    const { id, title, name, price, url, img } = product;
    return (
      <div className="box rounded" key={id}>
        <div className="img-box">
          <img src={img} alt={name} />
        </div>
        <div className="detail-box text-white">
          <h6 className="text-uppercase fw-semibold">
            {name} <span>{title}</span>
          </h6>
          <h5 className="fw-semibold">${price}</h5>
          <a href={url} className="text-white">
            BUY NOW
          </a>
        </div>
      </div>
    );
  });

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  return (
    <section id={props.id} className="chocolate_section ">
      <div className="container">
        <div className="heading-container text-dark">
          <h2>Our chocolate products</h2>
          <p>
            Many desktop publishing packages and web pagend web page editors now
            use Lorem Ipsum as their.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="chocolate-container row row-cols-auto justify-content-evenly">
          {productsList}
        </div>
      </div>
    </section>
  );
}
export default Products;
