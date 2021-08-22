import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypelistComponent } from './category-typelist.component';

describe('CategoryTypelistComponent', () => {
  let component: CategoryTypelistComponent;
  let fixture: ComponentFixture<CategoryTypelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTypelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
