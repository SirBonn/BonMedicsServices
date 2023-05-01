import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLabComponent } from './nav-bar-lab.component';

describe('NavBarLabComponent', () => {
  let component: NavBarLabComponent;
  let fixture: ComponentFixture<NavBarLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
