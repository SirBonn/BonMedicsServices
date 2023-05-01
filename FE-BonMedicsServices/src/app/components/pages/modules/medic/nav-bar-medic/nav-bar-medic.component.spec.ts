import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMedicComponent } from './nav-bar-medic.component';

describe('NavBarMedicComponent', () => {
  let component: NavBarMedicComponent;
  let fixture: ComponentFixture<NavBarMedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarMedicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
