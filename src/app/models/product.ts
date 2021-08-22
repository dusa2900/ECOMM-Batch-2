export class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category:string;
  type:string;
  instock:number;
  qnt:number;
  image: string;

  

  constructor(id:number, title:string,price:number, description:string, category:string, type:string, instock:number,qnt:number, image:string) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.category = category
    this.type = type
    this.instock = instock
    this.qnt = qnt
    this.image = image
  
  
    
  }
}
