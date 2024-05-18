/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card } from "../Card/Card";
import "./Decks.css";

export const Decks = ({
  deckOne,
  deckTwo,
  deckThree,
  setDeckOne,
  setDeckTwo,
  setDeckThree,
}) => {
  const [animations, setAnimations] = useState({
    deckOne: "",
    deckTwo: "",
    deckThree: ""
  });

  const moveCard = (fromDeck, toDeck, setFromDeck, setToDeck, fromDeckName, toDeckName) => {
    if (fromDeck.length === 0) return;
    const card = fromDeck[0];
    setFromDeck(fromDeck.slice(1));
    setToDeck([card, ...toDeck]);

    setAnimations({
      ...animations,
      [fromDeckName]: "animate__animated animate__fadeIn",
      [toDeckName]: "animate__animated animate__bounceIn",
    });
    setTimeout(() => {
      setAnimations({
        ...animations,
        [fromDeckName]: "",
      });
    }, 1000);
  };

  return (
    <div className="deck-contain">
      <div
        className="one"
        onClick={() => moveCard(deckOne, deckTwo, setDeckOne, setDeckTwo, 'deckOne', 'deckTwo')}
      >
        {deckOne.length > 0 && <Card {...deckOne[0]} animation={animations.deckOne} />}
      </div>
      <div
        className="two"
        onClick={() => moveCard(deckTwo, deckThree, setDeckTwo, setDeckThree, 'deckTwo', 'deckThree')}
      >
        {deckTwo.length > 0 && <Card {...deckTwo[0]} animation={animations.deckTwo} />}
      </div>
      <div className="three" onClick={() => moveCard(deckThree, deckOne, setDeckThree, setDeckOne, 'deckThree', 'deckOne')}>
        {deckThree.length > 0 && <Card {...deckThree[0]} animation={animations.deckThree} />}
      </div>
    </div>
  );
};
