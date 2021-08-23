import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { PasswordStrengthValidator } from "./password-req"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup | any;
  submitted = false;
  hide:boolean=true;
  constructor(private formBuilder: FormBuilder,private router: Router,private ecomm:EcommService,private toastr:ToastrService) { }

  ngOnInit() {
    this.onSubmit
    this.LoginForm = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])],
      password: [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])],
  }
    )}
    get f() { return this.LoginForm.controls; }

  onSubmit(value:any){
    this.ngOnInit()
    this.ecomm.login(value).subscribe(res=>

       {​​​
        console.log("login",res)

         if(res=="admin"){ 
        console.log("admin",res)

          this.toastr.success('Admin Logined successfully')
          this.router.navigate(['/admin']);
          localStorage.setItem('accesstoken', res.access_token);

        }


        else if (res=="user") {
          console.log("user",res)
     
          this.toastr.success('User Logined successfully')
          this.router.navigate(['']);
          localStorage.setItem('accesstoken', res.access_token);
  
         
        }

      
  else{
          this.toastr.error('Invalid  Details')
  
  }
 } )
}
// localStorage.setItem('user',JSON.stringify(res));
// this.submitted = true;

//         }​​​,
// err=>
// console.log(err)
    // )
    // if (this.LoginForm.invalid) {
      // return;
    // }
 

}
