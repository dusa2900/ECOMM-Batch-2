import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/SERVICES/admin.service';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  couponsForm: FormGroup | any;
  submitted = false;
  hide:boolean=true;
  register: any;
  p:number=1
  dialog: any;
type:any=['Percentage Discount','Amount Discount']
  coupon: any[]=[];
  @ViewChild('closebutton') closebutton;
  constructor(private formBuilder: FormBuilder,private admin:AdminService){

    
  }
  ngOnInit() {

    this.couponsForm = this.formBuilder.group({
      couponCode : ['', [Validators.required,Validators.minLength(8)]],
      couponType: ['', [Validators.required]],

      couponDescription: ['', [Validators.required]],
      couponValue: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    }, {
    });

    this.getcoupons()
  }

  // convenience getter for easy access to form fields
  get f() { return this.couponsForm.controls; }
  public close() {
    this.closebutton.nativeElement.click();
  }
  onaddCus() {
    510;

    this.dialog.closeAll();
  }
  onSubmit(value: any) {
    console.log("valueee",value);
    
    this.admin.postcoupons(value).subscribe((res: any)=>  {
    
console.log("postcouponnnnnn",res)
 
    })
    this.submitted = true;
    // stop here if form is invalid
    if (this.couponsForm.invalid) {
      return;
    }
  }
  getcoupons() {
    this.admin.getcoupons().subscribe((res: any)=>  {
      this.coupon=res
console.log("getcoupon", this.coupon)
    }
    )}


    
 
}
