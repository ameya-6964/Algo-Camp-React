import Card from "../Card/Card";
import "./Grid.css";

const Grid = ({ numberOfCards }) => {
  return (
    <div className="grid">
      {Array(numberOfCards)
        .fill(<Card />)
        .map((el, idx) => {
          return <Card key={idx} />;
        })}
    </div>
  );
};

export default Grid;
