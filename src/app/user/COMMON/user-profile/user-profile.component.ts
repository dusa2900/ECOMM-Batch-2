import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



import { UserProfileService } from '../../../SERVICES/user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 profile:any={};
 submitted = false;
 profileForm=new FormGroup(
   {  
    full_name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*$')]),
    email_id:new FormControl('',[Validators.required, Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]),
    mob_number:new FormControl('',[Validators.required, Validators.pattern('[6-9]\\d{9}')]),
    address_line1:new FormControl(''),
    address_line2:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    pin_code:new FormControl(''),
    alt_number:new FormControl(''),
    type:new FormGroup(
      {
        home:new FormControl(''),
        office:new FormControl(''),
        others:new FormControl(''),
      }
    )

   }
 );

  constructor(private _user:UserProfileService) { }

  ngOnInit(): void {

    this.getProfile();

    
  }
  get f() { return this.profileForm.controls; }


getProfile()
{
  this._user.getprofile().subscribe( res=>
  {
    
    console.log('get profile ', res);
    console.log('get profile  city:-', res.city);
    

     this.profileForm.patchValue(
      {
        full_name:res.full_name,
        email_id:res.email_id,
        mob_number:res.mob_number,
        address_line1:res.address_line1,
        address_line2:res.address_line2,
        city:res.city,
        state:res.state,
        pin_code:res.pin_code,
        alt_number:res.alt_number
  
      }
    )
    
  
    this.submitted = true;
    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

  }
  )
}



updateProfile() {
  
  this._user.updateprofile(this.profileForm.value).subscribe( (res)=>
  {
    console.log(res);
  })

 

}

onCancel()
{
  
}



  }
  




