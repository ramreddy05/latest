import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSearchDetailsComponent } from './address-search-details.component';

describe('AddressSearchDetailsComponent', () => {
  let component: AddressSearchDetailsComponent;
  let fixture: ComponentFixture<AddressSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
