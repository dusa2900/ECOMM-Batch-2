import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistN.OofproductsComponent } from './productlist-n.oofproducts.component';

describe('ProductlistN.OofproductsComponent', () => {
  let component: ProductlistN.OofproductsComponent;
  let fixture: ComponentFixture<ProductlistN.OofproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistN.OofproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistN.OofproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
