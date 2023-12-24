import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GameRawData } from 'src/app/core/interfaces/game-raw-data.interface';
import { GamesQuery } from 'src/app/core/interfaces/games-query.interfaces';
import { ApiServiceBase } from 'src/app/core/services/api-service-base';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService<Game> extends ApiServiceBase<Game> {

  
  constructor(public override http: HttpClient) { 
    super(http);
  }

  override getAllData(query: GamesQuery): Observable<Game[]> {
    this.setApiUrl(environment.API_URL);
    let url = new URL(this.apiUrl);
    if(query.category != '') {
        url.searchParams.append("category", query.category!);
    }
    if(query.platform != '') {
        url.searchParams.append("platform", query.platform!);
    }
    
    return this.http.get<GameRawData[]>(url.toString()).pipe(
        map((rawData: GameRawData[]) => {
            return rawData.map((rawData: GameRawData) => ({
                ...rawData,    
                shortDescription: rawData.short_description.substring(0, 30) + '...',
            }) as Game);
        })
    );
  }

  override getDataById(id: number): Observable<Game> {
    this.setApiUrl(environment.API_URL_DETAIL);
    let url = new URL(this.apiUrl);
    url.searchParams.append("id", id.toString());
    return this.http.get<GameRawData>(url.toString()).pipe(
      map((rawData: GameRawData) => ({
        ...rawData,
        shortDescription: rawData.short_description,
        gameUrl: rawData.game_url,
        freeToGameProfileUrl: rawData.freetogame_profile_url,
        minimumSystemRequirements: rawData.minimum_system_requirements,
        releaseDate: rawData.release_date
      } as Game))
    );
  }

}
