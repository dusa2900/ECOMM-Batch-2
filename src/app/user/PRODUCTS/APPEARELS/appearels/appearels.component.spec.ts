import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearelsComponent } from './appearels.component';

describe('AppearelsComponent', () => {
  let component: AppearelsComponent;
  let fixture: ComponentFixture<AppearelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
