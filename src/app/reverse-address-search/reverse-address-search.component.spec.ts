import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseAddressSearchComponent } from './reverse-address-search.component';

describe('ReverseAddressSearchComponent', () => {
  let component: ReverseAddressSearchComponent;
  let fixture: ComponentFixture<ReverseAddressSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseAddressSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseAddressSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
