import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishModalComponent } from './wish-modal.component';

describe('WishModalComponent', () => {
  let component: WishModalComponent;
  let fixture: ComponentFixture<WishModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
