import { Routes } from "@angular/router";
import { GamesListComponent } from "./games-list/games-list.component";
import { GamesDetailComponent } from "./games-detail/games-detail.component";

export const gamesRoutes: Routes = [
    { 
        path: 'games', 
        children: [
            { path: '', component:  GamesListComponent},
            { path: ':idGame', component: GamesDetailComponent }
        ]
    },
];