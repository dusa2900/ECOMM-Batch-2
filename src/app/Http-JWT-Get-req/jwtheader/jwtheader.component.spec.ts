import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtheaderComponent } from './jwtheader.component';

describe('JwtheaderComponent', () => {
  let component: JwtheaderComponent;
  let fixture: ComponentFixture<JwtheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
