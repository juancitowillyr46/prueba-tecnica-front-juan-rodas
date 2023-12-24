import { Component } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game.interface';
import { GamesServiceService } from '../games-service.service';
import { GamesQuery } from 'src/app/core/interfaces/games-query.interfaces';
import { GamesQueryObservable } from 'src/app/core/observables/games-query.observable';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  
  public gamesQuery: GamesQuery = {
    category: "",
    platform: "all",
    name: ""
  };

  public games: Game[] = [];

  public constructor(private gamesServiceService: GamesServiceService<Game>, private gamesQueryObservable: GamesQueryObservable) {
    this.searchGames();
  }

  public searchGames() {
    this.gamesQueryObservable.currentGamesQuery.subscribe(gamesQuery => {
      this.gamesQuery = gamesQuery;
      this.gamesServiceService.getAllData(gamesQuery).pipe().subscribe(res => {
        if(this.gamesQuery.name != '') {
          const result = this.games.filter(f => f.title.includes(this.gamesQuery.name!));
          this.games = result;
        } else {
          this.games = res;
        }
      });
    });
    
  }
}
