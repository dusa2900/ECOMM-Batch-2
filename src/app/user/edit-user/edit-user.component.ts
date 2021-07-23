import { HttpParams } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

public userRecord:any;
public userId!:number;

  constructor(private _userService:UserService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getUserRecord();

  }

getUserRecord():void
{
  this._userService.getUserById(this.userId).subscribe(res=>
    {
      if(res)
      {
        this.userRecord=res;
        console.log(this.userRecord);
      }
    },err=>
    {
      console.log(err);
    })
}


}
