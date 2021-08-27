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
  roler:any;
  submitted = false;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private ecomm: EcommService, private toastr: ToastrService) { }

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
      //  sessionStorage.setItem("username",value.username)
      // sessionStorage.getItem("regusername")
      const obj = JSON.parse(res);
      console.log("login-objjj", obj)
      console.log("username", obj.username)

      localStorage.setItem("usermail",obj.email)

      obj.roles.forEach((item:any) => {
        console.log("array",item);
        this.roler = item;
        
      });
      console.log("token",obj.accessToken);
      
      
      // let user = JSON.parse(atob(res.token?.split('.')[1]));
      sessionStorage.setItem('accessToken', obj.accessToken)

      if (this.roler == "USER") {

          this.toastr.success('user Logined successfully')

          this.router.navigate(['']);

        }


      else if (this.roler == "ADMIN") {
        console.log("admin", res.role)

        this.toastr.success('admin Logined successfully')
        this.router.navigate(['/admin']);


      }
      else {
        this.toastr.error('Invalid  Details')



      }

      this.submitted = true;
    },
      err =>
        console.log(err)
    )
    if (this.LoginForm.invalid) {
      return;
    }


  }
}




