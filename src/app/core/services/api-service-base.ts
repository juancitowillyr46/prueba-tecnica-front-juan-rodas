import { Injectable } from "@angular/core";
import { ApiServiceAbstract } from "./api-service.abstract";
import { Observable, map } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Game } from "../interfaces/game.interface";
import { GamesQuery } from "../interfaces/games-query.interfaces";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class ApiServiceBase<T> extends ApiServiceAbstract<T> {

    public apiUrl:string = environment.API_URL;

    constructor(public http: HttpClient) {
        super();
    }

    public setApiUrl(apiUrl:string): void {
        this.apiUrl = apiUrl;
    }

    override getAllData(query: GamesQuery): Observable<T[]> {
        throw new Error("Method not implemented.");
    }
    
    override getDataById(id: number): Observable<T> {
        throw new Error("Method not implemented.");
    }
    
}

  