import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPacientComponent } from './nav-bar-pacient.component';

describe('NavBarPacientComponent', () => {
  let component: NavBarPacientComponent;
  let fixture: ComponentFixture<NavBarPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPacientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
