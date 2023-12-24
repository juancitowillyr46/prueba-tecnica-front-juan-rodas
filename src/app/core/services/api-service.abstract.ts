import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IApiService } from "./api-service.interface";
import { GamesQuery } from "../interfaces/games-query.interfaces";

@Injectable({
    providedIn: 'root'
})
export abstract class ApiServiceAbstract<T> implements IApiService<T> {
  abstract getAllData(query: GamesQuery): Observable<T[]>;
  abstract getDataById(id: number): Observable<T>;
}