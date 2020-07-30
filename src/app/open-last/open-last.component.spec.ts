import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLastComponent } from './open-last.component';

describe('OpenLastComponent', () => {
  let component: OpenLastComponent;
  let fixture: ComponentFixture<OpenLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
