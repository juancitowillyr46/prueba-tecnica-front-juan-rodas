import { Component } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category.interface';
import { GamesQuery } from 'src/app/core/interfaces/games-query.interfaces';
import { Platform } from 'src/app/core/interfaces/platform.interface';
import { GamesQueryObservable } from 'src/app/core/observables/games-query.observable';

@Component({
  selector: 'app-games-filters',
  templateUrl: './games-filters.component.html',
  styleUrls: ['./games-filters.component.scss']
})
export class GamesFiltersComponent {

  public categoriesStr: string = "mmorpg,shooter,strategy,moba,racing,sports,social,sandbox,open-world,survival,pvp,pve,pixel,voxel,zombie,turn-based,first-person,third-Person,top-down,tank,space,sailing,side-scroller,superhero,permadeath,card,battle-royale,mmo,mmofps,mmotps,3d,2d,anime,fantasy,sci-fi,fighting,action-rpg,action,military,martial-arts,flight,low-spec,tower-defense,horror,mmorts";

  public platformStr: string = "browser,pc,all";
  
  public categories: Category[] = [];

  public platforms: Platform[] = [];

  public gamesQuery: GamesQuery = {
    category: "",
    platform: "all",
    name: ""
  };

  public constructor(private gamesQueryObservable: GamesQueryObservable) {

    const categoriesStr = this.categoriesStr.split(",");
    categoriesStr.forEach((category) => {
      this.categories.push({
        id: category,
        name: category
      })
    });

    const platformStr = this.platformStr.split(",");
    platformStr.forEach((platform) => {
      this.platforms.push({
        id: platform,
        name: platform
      })
    });

  }

  public searchGames() {
    this.gamesQueryObservable.changeGameQuery(this.gamesQuery);
  }

  public clearSearchGames() {
    this.gamesQuery = {
      category: "",
      name: "",
      platform: "all"
    }
    this.gamesQueryObservable.changeGameQuery(this.gamesQuery);
  }
}
