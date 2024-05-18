/* eslint-disable react/prop-types */
import "./Card.css";

export const Card = ({ value, symbol, color, animation }) => {
  return (
    <div className={`card-contain ${color} ${animation}`}>
      <div className="c-top">
        <h2>{value}</h2>
        <img src={symbol} alt="symbol card top" />
      </div>
      <div className="c-center">
        <img src={symbol} alt="symbol card center" />
      </div>
      <div className="c-bottom">
        <h2>{value}</h2>
        <img src={symbol} alt="symbol card bottom" />
      </div>
    </div>
  );
};
