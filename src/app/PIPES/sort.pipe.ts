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
    else
      return products;
  }

}
