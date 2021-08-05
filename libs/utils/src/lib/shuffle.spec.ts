import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('should return new array with different indexed values', () => {
    const list = [1, 2, 3, 4, 5, 6];
    expect(list[0] === shuffle(list)[0]).toBeFalsy();
    expect(list[0] === shuffle(list)[0]).toBeFalsy();
    expect(list[0] === shuffle(list)[0]).toBeFalsy();
  });
});
