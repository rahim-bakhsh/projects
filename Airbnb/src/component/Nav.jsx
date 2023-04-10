import "../app.css";
export default function Nav(data) {
  return (
    <nav className="container-fluid py-4 ps-3 shadow">
      <img className="logo" src={data.img} alt="company logo" />
    </nav>
  );
}
