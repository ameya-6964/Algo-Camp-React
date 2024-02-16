import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(1);
  function addClickHandler() {
    setValue((value) => value + 1);
  }
  function substractClickHandler() {
    if (value === 0) {
      return;
    }
    setValue((value) => value - 1);
  }
  return (
    <>
      <div className="counter">
        <h1>{value}</h1>
      </div>
      <div className="buttons">
        <button onClick={addClickHandler} className="add">
          Add
        </button>
        <button onClick={substractClickHandler} className="substract">
          Substract
        </button>
      </div>
    </>
  );
};

export default Counter;
