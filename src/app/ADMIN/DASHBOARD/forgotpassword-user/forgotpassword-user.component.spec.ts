import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordUserComponent } from './forgotpassword-user.component';

describe('ForgotpasswordUserComponent', () => {
  let component: ForgotpasswordUserComponent;
  let fixture: ComponentFixture<ForgotpasswordUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
