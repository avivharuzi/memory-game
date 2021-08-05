export const shuffle = <T>(list: T[]): T[] => {
  const shuffleList: T[] = [...list];
  const listLength = shuffleList.length;
  for (let index = 0; index < listLength; index++) {
    const randomIndex = Math.floor(Math.random() * listLength);
    const tempItem = shuffleList[index];
    shuffleList[index] = shuffleList[randomIndex];
    shuffleList[randomIndex] = tempItem;
  }
  return shuffleList;
};
