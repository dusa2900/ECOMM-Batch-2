import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  listusers: any[]=[];
  retrievedImage: any;
  p:number=1
  constructor(private admin:AdminService,public _DomSanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    this.getlistusers()
  }
  getlistusers() {
    this.admin.getlistusers().subscribe((res: any)=>  {
      this.listusers = res
console.log("listusers", this.listusers)

// this.retrievedImage = this._DomSanitizationService.bypassSecurityTrustUrl(
//   ` data:image/jpeg;base64,${res.image}`
  
// );
    }
    )}
}
