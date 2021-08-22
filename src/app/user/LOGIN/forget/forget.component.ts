import { Component, OnInit } from '@angular/core';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { ToastrService } from 'ngx-toastr'; 
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private ecomm:EcommService,private toastr: ToastrService,private formBuilder: FormBuilder) { }
  forgotpassword:any
  submitted = false;
  ngOnInit() {
    this.forgotpassword = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])]
    })
  }
  onForgotPassword(value:any){
    console.log("forgot",value);
    this.ecomm.forgotpassword(value).subscribe((res: any)=>{
      this.forgotpassword=res
 })
 this.submitted = true;
    // stop here if form is invalid
    if (this.forgotpassword.invalid) {
      return;
    }
  }

  get f() { return this.forgotpassword.controls; }

  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}
  
  // showSuccess(){
  //   this.toastr.success('User logged in successfully')
  // }

  // showError(){
  //   this.toastr.error('Invalid user name or pin')
  // }
}
