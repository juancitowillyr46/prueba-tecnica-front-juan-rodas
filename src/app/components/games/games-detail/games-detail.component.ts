import { Component } from '@angular/core';
import { Game } from 'src/app/core/interfaces/game.interface';
import { GamesServiceService } from '../games-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.scss']
})
export class GamesDetailComponent {

  public constructor(private gamesServiceService: GamesServiceService<Game>, private route: ActivatedRoute) {

    if(this.route.params){
      this.route.params.subscribe(params => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const id = params['idGame'];
        this.detailGame(id);
      });
    }
 
  }

  public game: Game | undefined;

  public detailGame(id: number) {
    this.gamesServiceService.getDataById(id).subscribe(res => {
      console.log(res);
      this.game = res;
    });
  }
}
