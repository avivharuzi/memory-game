import { duplicate } from './duplicate';

describe('duplicate', () => {
  it('should be duplicated numbers array', () => {
    const arr = [1, 2, 3];
    const duplicated = duplicate(arr);
    expect(duplicated.length).toBe(6);
    expect(arr[0] === duplicated[3]).toBeTruthy();
  });

  it('should be duplicated objects array', () => {
    const objectsArr = [{ name: 'aviv' }, { name: 'dani' }];
    const duplicatedObjectsArr = duplicate(objectsArr);
    expect(duplicatedObjectsArr.length).toBe(4);
    expect(objectsArr[0].name === duplicatedObjectsArr[2].name).toBeTruthy();
  });
});
