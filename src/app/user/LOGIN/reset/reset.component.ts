import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { PasswordStrengthValidator } from '../register/password-req';
import { ErrorStateMatcher } from '@angular/material/core'
import { ConfirmPasswordValidator } from '../register/must-watch';



 
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
 
export class ResetComponent implements OnInit {
  resetform: FormGroup | any;
  // resetform=new FormGroup({
  //   password:new FormControl(null,Validators.compose([
  //     Validators.required, Validators.minLength(8), PasswordStrengthValidator])),
  //   confirmpassword:new FormControl(null,Validators.compose([Validators.required, Validators.minLength(8), PasswordStrengthValidator])),
    
  // }
  // , {
 
  //   validator: ConfirmPasswordValidator("password", "confirmPassword")
 
  // })
    
    
  
  
 
  // comparePassword = (control: AbstractControl): {[key: string]: boolean} => {
  //   // get values
  //   const password = control.get('password');
  //   const repassword = control.get('repassword');
  //   // if no values, validated as true
  //   if (!password || !repassword) {
  //     return null;
  //   }
  //   // if values match, return null, else nomatch: true
  //   return password.value === repassword.value ? null : { nomatch: true };
  // };
 
  get f(){
    return this.resetform.controls;
  }
  submit(value:any){
    console.log(this.resetform.value)
  }
 
  constructor(private fb:FormBuilder,private ecomm:EcommService) { 
   
    
  }
  
 
  ngOnInit(){
    this.resetform=this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])],
      password:new FormControl(null,Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])),
      confirmpassword:new FormControl(null,Validators.compose([Validators.required, Validators.minLength(8), PasswordStrengthValidator])),
      
    }
    , {
 
      validator: ConfirmPasswordValidator("password", "confirmpassword")
  
    })
    
 
    
    
 
 
  }
 
}
