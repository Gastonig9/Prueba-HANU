import { suits } from "../data/cardData";

export const createShuffledDeck = () => {
  const deck = [];
  const selectedValues = ["A", "2", "3", "4"];
  const selectedSuits = ["hearts", "diamonds", "spades"];

  selectedSuits.forEach((suit) => {
    const suitData = suits.find((s) => s.name === suit);
    selectedValues.forEach((value) => {
      deck.push({
        value,
        suit: suitData.name,
        color: suitData.color,
        symbol: suitData.symbol,
      });
    });
  });

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};

export const getRandomValue = () => {
  const values = ["A", "2", "3", "4"];
  return values[Math.floor(Math.random() * values.length)];
};
