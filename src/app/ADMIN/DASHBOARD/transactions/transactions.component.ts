import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any;

  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.gettransactions()
  }
  gettransactions() {
    this.admin.transactions().subscribe((res: any)=>  {
      this.transactions = res
console.log("transactions", this.transactions)
    }
    )}
}
