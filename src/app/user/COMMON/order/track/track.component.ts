import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  // public delivered : boolean=false;
  // public intransit :boolean = false;
  // public pickup :boolean = false;
  public color:number=0;
  public width:any;
  public bgcolor1:any="#3268ff";
  public bgcolor2:any;
  public bgcolor3:any;
  public bgcolor4:any;

  constructor() { }

  ngOnInit(): void {
   this.fun();
  }

fun()

{
  if(this.color == 0)
  {
    this.width="5%";
    this.bgcolor1="#3268ff"
  }
 else if (this.color >= 0 && this.color < 40) {
this.width="34%";
  this.bgcolor2="#3268ff"
  }
  else if (this.color >= 40 && this.color < 80) {
    this.width="66%";
    this.bgcolor2="#3268ff";
    this.bgcolor3="#3268ff"
  }
  
  else if (this.color >= 80) {
    this.width="100%";
    this.bgcolor2="#3268ff";
    this.bgcolor3="#3268ff";
    this.bgcolor4="#3268ff"
  }
  else {
    console.log("No color");
  }

}

}
