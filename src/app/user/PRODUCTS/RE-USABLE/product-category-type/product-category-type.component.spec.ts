import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryTypeComponent } from './product-category-type.component';

describe('ProductCategoryTypeComponent', () => {
  let component: ProductCategoryTypeComponent;
  let fixture: ComponentFixture<ProductCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
