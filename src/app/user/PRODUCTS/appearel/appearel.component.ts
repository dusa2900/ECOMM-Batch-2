import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-appearel',
  templateUrl: './appearel.component.html',
  styleUrls: ['./appearel.component.scss']
})
export class AppearelComponent implements OnInit {

  mensList:any=[];
  womensList:any=[];
  kidsList:any=[];




  constructor(private _product:ApiService) { }

  ngOnInit(): void {

    this._product.getAppearelssList().subscribe(
      res=>
      {

        this.mensList=res.apparels.menswear;
        this.womensList=res.apparels.womenswear;
        this.kidsList=res.apparels.kidswear;
        console.log(this.mensList);
        console.log(this.womensList);
        console.log(this.kidsList);
      }
              

      )

  }

}
