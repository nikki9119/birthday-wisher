import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWishComponent } from './view-wish.component';

describe('ViewWishComponent', () => {
  let component: ViewWishComponent;
  let fixture: ComponentFixture<ViewWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
