import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-forgotpassword-user',
  templateUrl: './forgotpassword-user.component.html',
  styleUrls: ['./forgotpassword-user.component.scss']
})
export class ForgotpasswordUserComponent implements OnInit {
  forgotpassword:any[]=[]
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.getforgotpassword()
  }
  getforgotpassword() {
    this.admin.forgotpassword().subscribe((res: any)=>  {
      this.forgotpassword = res
console.log("listusers", this.forgotpassword)
    }
    )}
}
