import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '@memory-game/state';

@Component({
  selector: 'memory-game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.gameService.endGame$.subscribe(() => {
      this.router.navigate(['/status']).then();
    });
  }
}
