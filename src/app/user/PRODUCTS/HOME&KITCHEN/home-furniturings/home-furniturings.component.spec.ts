import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFurnituringsComponent } from './home-furniturings.component';

describe('HomeFurnituringsComponent', () => {
  let component: HomeFurnituringsComponent;
  let fixture: ComponentFixture<HomeFurnituringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFurnituringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFurnituringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
