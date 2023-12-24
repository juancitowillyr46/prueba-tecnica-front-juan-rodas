import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GamesQuery } from "../interfaces/games-query.interfaces";

@Injectable()
export class GamesQueryObservable {

    private gamesQuery = new BehaviorSubject<GamesQuery>({
        category: "",
        name: "",
        platform: "all"
    });

    public currentGamesQuery = this.gamesQuery.asObservable();

    changeGameQuery(value: GamesQuery) {
        this.gamesQuery.next(value);
    }

}