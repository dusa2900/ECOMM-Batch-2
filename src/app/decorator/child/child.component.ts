import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

  view="box";
  @Input() info:any;
  @Input() title:any;
  @Input('data') title1:any;

  @Output('out') send=new EventEmitter<string>();

  onClick(){
    this.view=this.view=="box" ?"box1":"box";
  }

  clicked(x:string)
  {
    this.send.emit(x);
  } 

}
