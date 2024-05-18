/* eslint-disable react/prop-types */
import "./GameOptions.css"
export const GameOptions = ({ resetGame, targetValue }) => {
  return (
    <div className="options-game">
      <div className="order-contain">
        <p>Valor a ordenar:</p>
        <h1>{targetValue}</h1>
      </div>
      <div className="reset-contain">
        <i className="fa-solid fa-arrow-rotate-right"></i>
        <button onClick={resetGame}>Reiniciar</button>
      </div>
    </div>
  );
};
