import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

title="Dusa Goutham";
currentMsg="Welcome to India";
currentItem="Television";
message='';

user=["Goutham","Dusa","RajiniKanth","vijay","Kamal"];

group=["Electrical","Web development","Civil","mechanical"];

grouplist=[
  ["power systems","Generation","control systems","distribution"],
  ["Html","css","javascript","typescript","Angular","Reactjs"],
  ["construction","planning","Designing"],
  ["Autocard","design vehicle"]
]

getData(boxNo:number,dta:string)
{
  this.message=this.group[boxNo]+" is  Department and Important factor "+dta;
}

}


