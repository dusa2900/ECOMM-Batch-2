import { Component, OnInit } from '@angular/core';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { ToastrService } from 'ngx-toastr'; 
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private ecomm:EcommService,private toastr: ToastrService) { }
  forgotpassword:any
  ngOnInit() {
  }
  onForgotPassword(value:any){
    console.log("forgot",value);
    this.ecomm.forgotpassword(value).subscribe((res: any)=>{
      this.forgotpassword=res
 })

  }
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
