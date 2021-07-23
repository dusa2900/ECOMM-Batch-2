
import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm ,Validators} from '@angular/forms';
//import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

/** template driven form
 * 
public name:string='';
public email:string='';
public  phone:string='';
public age:string='';
public designation:string='';
public city:string='';
public gender:string='';

public onSubmit(userForm : NgForm):void{

  console.log('Userform:',userForm.value);
    alert("form Submitted");
    userForm.reset();
  }


  public bottomLabel: string='';

  public Country=["select Country","India", "USA","Africa"];
  public State=["select state","Delhi", "Telangana","Maharashtra"];
  public City=["select city","Agra","Hyderabad","Mumbai"]

public userform=new FormGroup(
 {
   name:new FormControl(''),
   age:new FormControl(''),
   designation:new FormControl(''),
   email:new FormControl(''),
   phone:new FormControl(''),
   address:new FormGroup(
     {
      City:new FormControl(''),
      State:new FormControl(''),
      Country:new FormControl('')
     }
   )

 }
)

constructor(private _user:UserService) { }

ngOnInit(): void {
  this.bottomLabel="submit";
}


onSubmit()
{
  console.log(this.userform.value);
  this._user.postUser(this.userform.value);
  this.userform.reset();
} */
 /* template driven form
  public fname:string;
  public lname:string;
  public city:string;
  public pcode:string;
*/


public bottomLabel:any="Submit";
public userform:any;
public emailPattern: string='/^[a-zA-Z0-9.-]{2,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]{1,}$/';
public phnPattern: string = '/^[0-9]{10,10}$/';
public isValidFormSubmitted!:boolean;
  
  @Input() public userRecord:any={};
  @Output('onFormCancel') public cancel=new EventEmitter<any>();
  @Output('onFormSubmit') public submit:EventEmitter<any>=new EventEmitter();



  public Country=["select Country","India", "USA","Africa"];
  public State=["select state","Delhi", "Telangana","Maharashtra"];
  public City=["select city","Agra","Hyderabad","Mumbai"]

  constructor(private _userservice:UserService) { }

  
  ngOnInit(): void {
  
this.userform=new FormGroup(
  {
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    designation:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.pattern(this.phnPattern)]),
    address: new FormGroup({
      Country:new FormControl('',Validators.required),
      State:new FormControl('',Validators.required),
      City:new FormControl('',Validators.required)
    })
  }
)

if(this.userRecord.id){
  this.bottomLabel= "Update";
  this.setRecordToForm();
}
 
  }


  public setRecordToForm(): void{
    this.userform.patchValue(this.userRecord);
  }

public get f(){
  return this.userform.controls;
}


userSubmit():void{
  
  console.log('user Post data',this.userform.value);
  this.isValidFormSubmitted=false;
  console.log(this.userform.invalid);

  this._userservice.postUser(this.userform.value).subscribe(
    res=>
    {
      if(res)
      {
        alert(`Do you want to post User Data?`);
        this.userform.reset();
        this.submit.emit(true);
      }
    },err=>
    {
      console.log(err);
    }
  )

}

userCancel():void{
  this.cancel.emit(true);
}
  
}
