import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesFiltersComponent } from '../components/games/games-filters/games-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GamesServiceService } from '../components/games/games-service.service';
import { GamesQueryObservable } from '../core/observables/games-query.observable';

describe('GamesFiltersComponent', () => {
  let component: GamesFiltersComponent;
  let fixture: ComponentFixture<GamesFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesFiltersComponent],
      imports:[HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [GamesServiceService, GamesQueryObservable],
    });
    fixture = TestBed.createComponent(GamesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
