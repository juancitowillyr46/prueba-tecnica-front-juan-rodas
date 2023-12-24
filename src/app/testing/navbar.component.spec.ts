import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterModule],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            paramMap: of({ get: (key: any) => '452' })
          }
        }
      ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
