import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversePhoneSearchComponent } from './reverse-phone-search.component';

describe('ReversePhoneSearchComponent', () => {
  let component: ReversePhoneSearchComponent;
  let fixture: ComponentFixture<ReversePhoneSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReversePhoneSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversePhoneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
