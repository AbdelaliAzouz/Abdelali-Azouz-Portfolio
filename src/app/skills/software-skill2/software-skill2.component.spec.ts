import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSkill2Component } from './software-skill2.component';

describe('SoftwareSkill2Component', () => {
  let component: SoftwareSkill2Component;
  let fixture: ComponentFixture<SoftwareSkill2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSkill2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSkill2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
