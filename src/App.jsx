import "./App.css";
import { Decks } from "./components/Decks/Decks";
import { useState, useEffect, useRef } from "react";
import { createShuffledDeck, getRandomValue } from "./utils/utils";
import { GameOptions } from "./components/GameOptions/GameOptions";
import victoryAudio from "./assets/victorySound.m4a"

function App() {
  const [deckOne, setDeckOne] = useState(createShuffledDeck());
  const [deckTwo, setDeckTwo] = useState([]);
  const [deckThree, setDeckThree] = useState([]);
  const [valueToWin, setValueToWin] = useState(getRandomValue());
  const [winMessage, setWinMessage] = useState("");
  const winAudio = useRef(new Audio(victoryAudio));
  winAudio.current.volume = 0.1;

  const resetGame = () => {
    setDeckOne(createShuffledDeck());
    setDeckTwo([]);
    setDeckThree([]);
    setValueToWin(getRandomValue());
    setWinMessage("");
  };

  useEffect(() => {
    if (
      deckOne[0]?.value === valueToWin &&
      deckTwo[0]?.value === valueToWin &&
      deckThree[0]?.value === valueToWin
    ) {
      setWinMessage("¡Has ganado el juego!");
      winAudio.current.play()
    }
  }, [deckOne, deckTwo, deckThree, valueToWin, winAudio]);

  return (
    <div className="game-card-contain">
      <GameOptions resetGame={resetGame} targetValue={valueToWin} />
      <Decks
        deckOne={deckOne}
        deckTwo={deckTwo}
        deckThree={deckThree}
        setDeckOne={setDeckOne}
        setDeckTwo={setDeckTwo}
        setDeckThree={setDeckThree}
      />
      {winMessage && <div className="message">{winMessage}</div>}
    </div>
  );
}

export default App;
