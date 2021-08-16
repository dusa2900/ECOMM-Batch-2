import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { NgxImgZoomService } from "ngx-img-zoom";
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  id:any;
  overview:any;

 
  constructor() {

  }
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  ngOnInit(): void {
  }

}
