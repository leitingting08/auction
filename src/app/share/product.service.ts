import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products:Product[] = [
          new Product(1,"第1个商品",1.99,1.5,"这是第1个商品",["电子产品","硬件设备"]),
          new Product(2,"第2个商品",2.99,2.5,"这是第2个商品",["电子产品","硬件设备"]),
          new Product(3,"第3个商品",3.99,3.5,"这是第3个商品",["电子产品"]),
          new Product(4,"第4个商品",4.99,4.5,"这是第4个商品",["电子产品","硬件设备"]),
          new Product(5,"第5个商品",5.99,3.5,"这是第5个商品",["电子产品","硬件设备"]),
          new Product(6,"第6个商品",6.99,4.5,"这是第6个商品",["图书"]),
      ]

   private comments:Comment[] = [
         new Comment(1,1,"2018-02-02 22:22:22","张三",3,"东西不错"),
         new Comment(2,1,"2018-01-02 16:22:22","张三",4,"东西挺不错"),
         new Comment(3,1,"2018-03-02 21:22:22","张三",2,"东西还不错"),
         new Comment(4,2,"2018-04-02 23:22:22","张三",4,"东西非常不错")
   ]

  getProducts(): Product[] {
      return this.products;
  }

  getProduct(id:number):Product {
      return this.products.find((product)=>product.id == id);
  }

  getCommentsForProductId(id:number) : Comment[]{
      return this.comments.filter((comment:Comment)=>comment.productId == id);
  }

}



export class Product{
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public star:number,
		public desc:string,
		public categories:Array<string>
		){

	}
}

export class Comment {
	constructor(public id:number,
				public productId:number,
				public timestamp:string,
				public user:string,
				public rating:number,
				public content:string
		){

	}
}

