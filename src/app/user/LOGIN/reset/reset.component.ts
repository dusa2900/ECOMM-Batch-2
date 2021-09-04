import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { PasswordStrengthValidator } from '../register/password-req';
import { ConfirmPasswordValidator } from '../register/must-watch';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



 
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
 
export class ResetComponent implements OnInit {
  resetform:FormGroup | any;
  resetpassword:any
  submitted = false;
  hide:boolean=true;
  constructor(private  formBuilder: FormBuilder,private ecomm:EcommService,private toastr:ToastrService,private router:Router ) {  }
  
  ngOnInit() {
    this.resetform = this.formBuilder.group({
      mobileNo: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])],

      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])],
 
      //   confirmPassword: ['',
      //  Validators.required,Validators.minLength(8),],
    
    }, {
      // validator: ConfirmPasswordValidator("password", "confirmPassword")
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetform.controls; }

  savepassword(value:any){
    // value.mobilenumber=localStorage.getItem('reset');
    console.log("forgot",value);
    this.ecomm.resetpassword(value).subscribe((res: any)=>{
      this.resetpassword=res
      console.log("reseet",this.resetpassword);
      
if(res.message="Password Changed"){
  this.toastr.success('password updated successfully')
this.router.navigate(['/login'])
}
else { 
  this.toastr.error('Invalid mobile number')

}
 })

 this.submitted = true;
 // stop here if form is invalid
 if (this.resetform.invalid) {
   return;
 }

}

  
 

 
}
