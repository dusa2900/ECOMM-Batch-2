import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-forgotpassword-user',
  templateUrl: './forgotpassword-user.component.html',
  styleUrls: ['./forgotpassword-user.component.scss']
})
export class ForgotpasswordUserComponent implements OnInit {
  forgotpassword:any[]=[]
  p:number=1
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.getforgotpassword()
  }
  getforgotpassword() {
    this.admin.forgotpassword().subscribe((res: any)=>  {
      this.forgotpassword = res
console.log("forgotpassword", this.forgotpassword)
    }
    )}
}
