import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProbationParoleComponent } from './active-probation-parole.component';

describe('ActiveProbationParoleComponent', () => {
  let component: ActiveProbationParoleComponent;
  let fixture: ComponentFixture<ActiveProbationParoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProbationParoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProbationParoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
