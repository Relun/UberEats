import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenProfileSummaryPage } from './green-profile-summary.page';

describe('GreenProfileSummaryPage', () => {
  let component: GreenProfileSummaryPage;
  let fixture: ComponentFixture<GreenProfileSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenProfileSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenProfileSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
