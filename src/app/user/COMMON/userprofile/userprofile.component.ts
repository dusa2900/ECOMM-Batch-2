import { Component, OnInit } from '@angular/core';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data: any;
  profiledata: any;
  constructor(private ecomm:EcommService, private fb:FormBuilder) { }
 submitted = false; 
 getProfile()
 {
   this.ecomm.getprofile().subscribe( res=>
   {
   console.log("get profile",res);
this.profiledata=res
    //   this.profileForm.patchValue(
    //    {
    //     Name:res.Name,
    //     email:res.email,
    //      mobile:res.mobile,
    //     addresses:res.addresses
    //    }
    //  )

    }
    )
   this.submitted = true;


   if (this.profileForm.invalid) {
     return;
   }

   
 }

profileForm: any={};
value = this.fb.group({
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required],
    district: ['', Validators.required],
    type: ['', Validators.required]
  }); 

  ngOnInit() {
    this.getProfile()
    this.getuser()
    this.profileForm = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      district: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  getuser() {
    this.ecomm.getuser().subscribe( (res)=>
    {
      console.log("getuserdata",res);
      this.data=res
    });  
  
  }

 
 
  updateProfile(value:any) {
    this.ecomm.postprofile(value).subscribe( (res)=>
    {
      console.log("posttt",res);
    });  
  
  }

 
}
