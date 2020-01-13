import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePrisonComponent } from './active-prison.component';

describe('ActivePrisonComponent', () => {
  let component: ActivePrisonComponent;
  let fixture: ComponentFixture<ActivePrisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePrisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePrisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
