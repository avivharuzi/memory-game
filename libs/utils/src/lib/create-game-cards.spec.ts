import { createGameCards } from './create-game-cards';

describe('createGameCards', () => {
  it('should be create valid cards objects', () => {
    const gameCards = createGameCards(18);
    expect(gameCards).toHaveLength(18);
    const gameCard = gameCards[0];
    expect(gameCard.id).toBeDefined();
    expect(gameCard.path).toBeDefined();
    expect(gameCard.isFlip).toBeDefined();
    expect(gameCard.hasMatch).toBeDefined();
  });
});
