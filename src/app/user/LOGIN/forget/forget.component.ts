import { Component, OnInit } from '@angular/core';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { ToastrService } from 'ngx-toastr'; 
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  forgot: any;
  forgotpassword:any
  submitted = false;


  constructor(private ecomm:EcommService,private toastr:ToastrService,private formBuilder: FormBuilder,private router: Router) { }
 
  ngOnInit() {
    this.forgotpassword = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])]
    })
  }
  onForgotPassword(value:any){
    console.log("forgot",value);
    this.ecomm.forgotpassword(value).subscribe((res: any)=>{
      this.forgot=res
      console.log("for",res);
      console.log("msg",res.message);

      
  // this.router.navigate(['/reset']);
if(res.message='Mail Sent Succesully'){
  this.toastr.success('Mail Sent Succesully')
  // this.router.navigate(['/reset'])

}

    err =>{
      console.log(err)
      this.toastr.error(' Number is already exists')
    }
 })
 this.submitted = true;
    // stop here if form is invalid
    if (this.forgotpassword.invalid) {
    
      return;

    }
 


  }
  

  get f() { return this.forgotpassword.controls; }


}
