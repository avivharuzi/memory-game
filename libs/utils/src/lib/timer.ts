import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export const timer = (maxCountTime: number): Observable<number> => {
  return interval(1000).pipe(
    take(maxCountTime),
    map((countTime) => {
      return maxCountTime - (countTime + 1);
    })
  );
};
