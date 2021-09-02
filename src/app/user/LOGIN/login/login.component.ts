import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { LoginAuthService } from 'src/app/SERVICES/login.auth.service';
import { PasswordStrengthValidator } from "../register/password-req"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup | any;
  roles:any;
  submitted = false;
  hide: boolean = true;
name:any
  constructor(private formBuilder: FormBuilder,private loginauth:LoginAuthService ,private router: Router, private ecomm: EcommService, private toastr: ToastrService) { }

  ngOnInit() {
    this.onSubmitLogin
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthValidator])],
    }
    )
  }
  get f() { return this.LoginForm.controls; }

  onSubmitLogin(value: any) {
    this.ngOnInit()
    this.ecomm.login(value).subscribe(res => {
console.log("login",res);

      const obj = JSON.parse(res);
      console.log("login-objjj", obj)
      console.log("username", obj.username)
      this.loginauth.setUsername(obj.username)
   


      obj.roles.forEach((item:any) => {
        console.log("array",item);
        this.roles = item;
        this.loginauth.setRoles(this.roles)
      });
      console.log("token",obj.accessToken);
      
   
    

this.loginauth.setEmail(obj.email);
this.loginauth.setToken(obj.accessToken);


      // let user = JSON.parse(atob(res.token?.split('.')[1]));


      if (this.roles == "USER") {

          this.toastr.success('user Logined successfully')

          this.router.navigate(['']);

        }


      else if (this.roles == "ADMIN") {
        console.log("admin", res.role)

        this.toastr.success('admin Logined successfully')
        this.router.navigate(['/admin']);


      }
//       else if(this.err=="Some thing is wrong") {
//         this.toastr.error('Invalid  Details')
//  alert("error")

//       }

      this.submitted = true;
    },
      err =>{
        console.log(err)
        this.toastr.error('Invalid  Details')
      }
    )
    if (this.LoginForm.invalid) {
      return;
    }


  }
}




