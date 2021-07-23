import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public usersList:any[]=[];

  public showForm!:boolean;

  constructor(private _userservice:UserService,private _router:Router,private _route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
    this.showForm=true;
    if(this._route.routeConfig?.path==='add')
    {
        this.showForm=false;
    }
    this.getUserList();
  }



public show():void

{
  
  this._router.navigate(['add'],{relativeTo:this._route});
  this.showForm=false;
}




public getUserList():void
{
  this._userservice.getUsers().subscribe(res=>
   {
     if(res)
     {
        this.usersList=res;
        console.log(this.usersList);
     }
   },err=>
   {
     console.log(err);
   }
    )
}





deleteUser(x:number)
{
  this._userservice.deleteUser(x).subscribe(
    res=>
    {
      
      if(res)
      {
        alert(`Do You want to delete  Id number ${x}`);
      this.getUserList();
      console.log(this.usersList);
      }
    },err=>
    {
        console.log(err);
    }
    
  )
}

editUser(userId:number)
{
  if(userId)
  {
    this.showForm=false;
    this._router.navigate(['edit',userId],{relativeTo:this._route})
  }
}




onSubmit(event:any):void
{
  if(event)
  {
    
    this.showForm=true;
  this._router.navigate([''],{relativeTo:this._route});
  this.getUserList();
  }
}


onCancel(event:any):void{
 if(event)
 {
  this.showForm=true;
  this._router.navigate([''],{relativeTo:this._route});
 }
}

}
