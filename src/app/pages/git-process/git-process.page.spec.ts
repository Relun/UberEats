import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProcessPage } from './git-process.page';

describe('GitProcessPage', () => {
  let component: GitProcessPage;
  let fixture: ComponentFixture<GitProcessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitProcessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
