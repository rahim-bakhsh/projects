import { useState } from "react";
import Header from "./component/Header";
import Meme from "./component/Meme";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const switchThem = () => {
    return setDarkTheme((prevStat) => !prevStat);
  };

  return (
    <div className="App" id={darkTheme ? "dark---tneme" : ""}>
      <Header theme={darkTheme} toggleTheme={switchThem} />
      <Meme />
    </div>
  );
}

export default App;
