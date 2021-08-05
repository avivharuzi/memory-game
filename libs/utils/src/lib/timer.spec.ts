import { TestScheduler } from 'rxjs/testing';

import { timer } from './timer';

describe('timer', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should countdown', () => {
    scheduler.run(({ expectObservable }) => {
      expectObservable(timer(5)).toBe(
        '1s a 999ms b 999ms c 999ms d 999ms (e|)',
        {
          a: 4,
          b: 3,
          c: 2,
          d: 1,
          e: 0,
        }
      );
    });
  });
});
