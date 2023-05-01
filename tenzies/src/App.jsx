import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import Die from "./Die";
import "./App.css";

function App() {
  //declared state for change the dice or random number
  const [dice, setDice] = useState(allNewDice);

  // generate na object that random number is one part of it
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // push new random dice(object)
  function allNewDice() {
    const newDice = new Array();
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  // find the hold dice
  const holdDice = (dieId) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  // assign and render the dice value to die componenet
  const diceElement = dice.map((die) => (
    <Die
      held={die.isHeld}
      value={die.value}
      key={die.id}
      toggle={() => holdDice(die.id)}
    />
  ));

  //  return new random numbers(object) when btn clicked or restart the game
  const rollDice = () => {
    return !tenzies
      ? setDice((oldDice) =>
          oldDice.map((die) => {
            return die.isHeld ? die : generateNewDie();
          })
        )
      : [setTenzies(false), setDice(allNewDice)];
  };

  // show the player state (win the game or not)
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const isAllHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameVAlue = dice.every((die) => die.value === firstValue);
    if (isAllHeld && allSameVAlue) {
      setTenzies(true);
    }
  }, [dice]);

  return (
    <main className="">
      {tenzies && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls
        </p>
      </div>
      <div className="dice-container">{diceElement}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
