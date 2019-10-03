import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenEditProfilePage } from './green-edit-profile.page';

describe('GreenEditProfilePage', () => {
  let component: GreenEditProfilePage;
  let fixture: ComponentFixture<GreenEditProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenEditProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenEditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
