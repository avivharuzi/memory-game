import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GameQuery } from '@memory-game/state';
import { GameStatus } from '@memory-game/data';

@Injectable({
  providedIn: 'root',
})
export class StatusGuard implements CanActivate {
  constructor(private router: Router, private gameQuery: GameQuery) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.gameQuery.status$.pipe(
      map((status) => {
        if (status === GameStatus.End) {
          return true;
        }
        this.router.navigate(['/']).then();
        return false;
      })
    );
  }
}
