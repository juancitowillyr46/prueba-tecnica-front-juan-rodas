import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesDetailComponent } from '../components/games/games-detail/games-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GamesServiceService } from '../components/games/games-service.service';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { GamesModule } from '../components/games/games.module';

describe('GamesDetailComponent', () => {
  let component: GamesDetailComponent;
  let fixture: ComponentFixture<GamesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesDetailComponent],
      imports:[HttpClientModule, RouterModule, GamesModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        GamesServiceService,
        { 
          provide: ActivatedRoute, 
          useValue: {
            paramMap: of({ get: (key: any) => '452' })
          }
        }
      ],
    });
    fixture = TestBed.createComponent(GamesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
