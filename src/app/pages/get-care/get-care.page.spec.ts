import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCarePage } from './get-care.page';

describe('GetCarePage', () => {
  let component: GetCarePage;
  let fixture: ComponentFixture<GetCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
