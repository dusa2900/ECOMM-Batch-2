import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { PasswordStrengthValidator } from './password-req';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup | any;
  submitted = false;
  hide:boolean=true;
  constructor(private formBuilder: FormBuilder,private router: Router,private ecomm:EcommService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])],
      password: [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])],
  }
    )}
    get f() { return this.LoginForm.controls; }
  onSubmit(value:any){

    this.ecomm.login(value).subscribe(
        res=>
        {
          console.log(res);
          localStorage.setItem('user',JSON.stringify(res));
          this.submitted = true;
          this.router.navigate(['/main'])
        },
        err=>
        console.log(err)
    
    )
   
    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    }
    
  }
}
