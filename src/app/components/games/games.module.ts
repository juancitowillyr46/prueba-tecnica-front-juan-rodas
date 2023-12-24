import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesFiltersComponent } from './games-filters/games-filters.component';
import { RouterModule } from '@angular/router';
import { gamesRoutes } from './games-routes';
import { GamesDetailComponent } from './games-detail/games-detail.component';
import { GamesServiceService } from './games-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GamesListComponent,
    GamesFiltersComponent,
    GamesDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gamesRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GamesServiceService
  ]
})
export class GamesModule { }
