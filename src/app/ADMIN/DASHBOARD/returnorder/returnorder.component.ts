import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-returnorder',
  templateUrl: './returnorder.component.html',
  styleUrls: ['./returnorder.component.scss']
})
export class ReturnorderComponent implements OnInit {
  orders:any
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.getreturnorders()
  }
  getreturnorders() {
    this.admin.getorders().subscribe((res: any)=>  {
      this.orders = res
console.log("orders", this.orders)
    }
    )}
}
