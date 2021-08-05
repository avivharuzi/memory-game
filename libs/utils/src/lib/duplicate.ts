import { deepClone } from './deep-clone';

export const duplicate = <T>(list: T[]): T[] => {
  return [...deepClone(list), ...deepClone(list)];
};
