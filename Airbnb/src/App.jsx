import Nav from "./component/Nav";
import data from "./component/data";
import Card from "./component/Card";
import Galary from "./component/Galary";
// images
import galary from "./assets/Group.png";
import airbnbLogo from "./assets/airbnbLogo.svg.png";
// StyleSheet files
import "./App.css";

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <div className="App">
      <Nav img={airbnbLogo} />
      <Galary
        img={galary}
        title="Online Experiences"
        detail="Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
      />
      <div className="card-group gap-5 m-4">{cards}</div>
    </div>
  );
}

export default App;
