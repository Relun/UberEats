import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpalPagesPage } from './ppal-pages.page';

describe('PpalPagesPage', () => {
  let component: PpalPagesPage;
  let fixture: ComponentFixture<PpalPagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpalPagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpalPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
