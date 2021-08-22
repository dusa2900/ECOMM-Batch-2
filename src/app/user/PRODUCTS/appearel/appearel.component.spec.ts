import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearelComponent } from './appearel.component';

describe('AppearelComponent', () => {
  let component: AppearelComponent;
  let fixture: ComponentFixture<AppearelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
