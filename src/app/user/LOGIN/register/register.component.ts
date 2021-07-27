import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from "./password-req"
import { MustMatch } from './must-watch';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  hide:boolean=true;
  register: any;
  constructor(private formBuilder: FormBuilder,private ecomm:EcommService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      Name: ['', Validators.required],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])],

      email: ['', [Validators.required, Validators.email]],
      password: [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])],

      confirmPassword: [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])],

      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(value: any) {
    
    this.ecomm.register(value).subscribe((res: any)=>      {
       
//       if (res && res.status == 'success') {
     
//         this.toastr.success('User created  successfully')

//         this.router.navigate(['/login']);
//       }
// else{
//         this.toastr.error('User Already Exists')

// }
     this.toastr.error('User Already Exists')

    }
 
 )
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
