export default function Die(props) {
  return (
    <div
      className={`die-face ${props.held ? "held" : "white"}`}
      onClick={props.toggle}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
