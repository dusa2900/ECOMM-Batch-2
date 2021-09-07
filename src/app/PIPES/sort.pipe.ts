import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../MODEL/model';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: product[], type: string): any {
    console.log(products,type)
    if(type=="Low to High")
      // return products.sort((x,y)=>x.price-y.price);
 
    return products.sort((x,y)=>{ console.log(x.price,y.price,x.price-y.price);
      return x.price-y.price})
 
    else if(type=="High to Low")
      return products.sort((x,y)=>y.price-x.price);


    else if(type=="A-Z")
    return products.sort((x,y)=>x.title.localeCompare(y.title));
    else if(type=="Z-A")
    return products.sort((x,y)=>y.title.localeCompare(x.title));
    else if(type=="Higly Rated")
    return products.sort((x,y)=>y.rating-x.rating);
    else
      return products;


  }

}
