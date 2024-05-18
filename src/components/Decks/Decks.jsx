/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Card } from "../Card/Card";
import "./Decks.css";
import changeAudio from "../../assets/changeCardSound.mp3"

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
  const cardChangeAudio = useRef(new Audio(changeAudio));
  cardChangeAudio.current.volume = 0.1;

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
    cardChangeAudio.current.play()
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
