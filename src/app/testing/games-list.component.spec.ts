import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesListComponent } from '../components/games/games-list/games-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GamesServiceService } from '../components/games/games-service.service';
import { GamesQueryObservable } from '../core/observables/games-query.observable';
import { GamesModule } from '../components/games/games.module';
import { ActivatedRoute } from '@angular/router';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesListComponent],
      imports:[HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [GamesServiceService, GamesQueryObservable],
    });
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
