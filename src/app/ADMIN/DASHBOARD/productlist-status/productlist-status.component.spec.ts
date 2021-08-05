import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistStatusComponent } from './productlist-status.component';

describe('ProductlistStatusComponent', () => {
  let component: ProductlistStatusComponent;
  let fixture: ComponentFixture<ProductlistStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
