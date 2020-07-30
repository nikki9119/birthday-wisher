import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWishComponent } from './create-wish.component';

describe('CreateWishComponent', () => {
  let component: CreateWishComponent;
  let fixture: ComponentFixture<CreateWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
