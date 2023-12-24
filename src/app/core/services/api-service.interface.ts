import { Observable } from "rxjs";
import { GamesQuery } from "../interfaces/games-query.interfaces";

export interface IApiService<T> {
    getAllData(query: GamesQuery): Observable<T[]>;
    getDataById(id: number): Observable<T>;
}