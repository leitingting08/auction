import { Injectable,EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  searchEvent:EventEmitter<ProductSearchParams> = new EventEmitter;

  getAllCategories():string[]{
     return ["电子产品","硬件设备","图书"];
   }
  getProducts(): Observable<Product[]> {
      return this.http.get("/api/products").map(res=>res.json());
  }

  getProduct(id):Observable<Product> {
      return this.http.get("/api/product/"+id).map(res=>res.json());
  }

  getCommentsForProductId(id) : Observable<Comment[]>{
      return this.http.get("/api/product/"+id+"/comments").map(res=>res.json());
  }

  search(params: ProductSearchParams):Observable<Product[]>{
    return this.http.get("/api/products",{search:this.encodeParams}).map(res => res.json())
  }

  private encodeParams(params: ProductSearchParams){
    let result:URLSearchParams;

    result = Object.keys(params)
    .filter(key => params[key])
    .reduce((sum:URLSearchParams,key:string) =>{
      sum.append(key, params[key]);
      return sum;
    },new URLSearchParams());
  }

}




export class ProductSearchParams{
  constructor(
    public title:string,
    public price:number,
    public category:string
    ){}
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





