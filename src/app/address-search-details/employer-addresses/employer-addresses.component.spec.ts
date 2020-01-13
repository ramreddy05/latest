import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddressesComponent } from './employer-addresses.component';

describe('EmployerAddressesComponent', () => {
  let component: EmployerAddressesComponent;
  let fixture: ComponentFixture<EmployerAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
