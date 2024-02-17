import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(false); // False -> X , true -> 0

  function play() {
    setTurn(!turn);
  }
  const cardArray = Array(numberOfCards).fill(null);

  return (
    <>
      <h1 className="turn-highlight">{turn ? "O" : "X"} Playing Currently</h1>
      <div className="grid">
        {cardArray.map((el, idx) => (
          <Card key={idx} onPlay={play} />
        ))}
      </div>
    </>
  );
};

export default Grid;
