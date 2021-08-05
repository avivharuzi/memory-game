import { deepClone } from './deep-clone';

describe('deepClone', () => {
  it('should clone without references', () => {
    const obj = { name: 'johny', age: 20, address: { city: 'new york' } };
    const cloneObj = { ...deepClone(obj) };
    expect(obj === cloneObj).toBeFalsy();
    expect(obj.address === cloneObj.address).toBeFalsy();
    obj.address.city = 'washington';
    expect(obj.address.city === cloneObj.address.city).toBeFalsy();
  });
});
