import { Component, OnInit } from '@angular/core';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  constructor(private ecomm:EcommService) { }
  profile:any={};
  submitted = false;
  profileForm=new FormGroup(
    {  
      firstname:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*$')]),
     email:new FormControl('',[Validators.required, Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]),
     username:new FormControl('',[Validators.required, Validators.pattern('[6-9]\\d{9}')]),
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
  get f() { return this.profileForm.controls; }

 
   ngOnInit(): void {
 
     this.getProfile();
 
     
   }
 
 
 
 getProfile()
 {
   this.ecomm.getprofile().subscribe( res=>
   {
     console.log('get profileeee ', res);
     console.log('get profile  city:-', res.city);
 
      this.profileForm.patchValue(
       {
        firstname:res.firstname,
        email:res.email,
        username:res.username,
         address_line1:res.address_line1,
         address_line2:res.address_line2,
         city:res.city,
         state:res.state,
         pin_code:res.pin_code,
         alt_number:res.alt_number
   
       }
     )
    }
    )
   this.submitted = true;
   // stop here if form is invalid
   if (this.profileForm.invalid) {
     return;
   }
 }
 
 
 
 updateProfile() {
   console.log('form values to update', this.profileForm.value);
   this.ecomm.updateprofile(this.profileForm.value).subscribe( (res)=>
   {
     console.log(res);
     alert("successfully updated")
   })
  
 
 }
}
