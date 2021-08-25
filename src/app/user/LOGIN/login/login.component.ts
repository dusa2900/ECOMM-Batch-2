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
       sessionStorage.setItem("mobilenumber",value.mobile)
       sessionStorage.getItem("regusername")
        console.log("login",res)

        //  if(res=="token"){ 
// let user=JSON.parse(atob(res.token?.split('.')[1]));
// console.log("user-token",user)
// console.log("user-email",user.email)


// localStorage.setItem('current user',user)
// localStorage.setItem('token',res.token)
// if(user.role=="User"){ 
//   this.toastr.success('Admin Logined successfully')

//   this.router.navigate(['']);

// }
//          else{
//           this.toastr.error('Invalid  Details')

//   this.router.navigate(['/admin']);

  
//   }

        // }


  //       else if (res=="user") {
  //         console.log("user",res)
     
  //         this.toastr.success('User Logined successfully')
  //         this.router.navigate(['']);
  
         
  //       }

      

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
