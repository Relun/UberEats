import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenAccountPage } from './green-account.page';

describe('GreenAccountPage', () => {
  let component: GreenAccountPage;
  let fixture: ComponentFixture<GreenAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
