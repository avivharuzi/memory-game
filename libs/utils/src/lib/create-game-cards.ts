import { Card } from '@memory-game/data';

import { duplicate } from './duplicate';
import { shuffle } from './shuffle';

export const createGameCards = (length: number): Card[] => {
  const startArrayLength = length / 2;
  const emptyArray = Array.from({ length: startArrayLength }).fill(null);
  const cards: Card[] = emptyArray.map((_, index) => {
    return {
      id: 0,
      path: `shared-assets/images/actors/${index + 1}.jpg`,
      isFlip: false,
      hasMatch: false,
    };
  });
  const duplicateCards = duplicate(cards);
  const shuffleCards = shuffle(duplicateCards);
  return shuffleCards.map((value, index) => {
    return {
      ...value,
      id: index,
    };
  });
};
