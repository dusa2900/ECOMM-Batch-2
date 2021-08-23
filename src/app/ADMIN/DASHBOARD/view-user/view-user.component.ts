import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  listusers: any[]=[];

  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.getlistusers()
  }
  getlistusers() {
    this.admin.getlistusers().subscribe((res: any)=>  {
      this.listusers = res
console.log("listusers", this.listusers)
    }
    )}
}
