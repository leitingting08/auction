import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Product,ProductService } from "../share/product.service";
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	private products:Observable<Product[]>;

	//private keyword:string;

	private titleFilter:FormControl = new FormControl();

    private imgUrl = 'http://placehold.it/260x150';

  constructor(private productService:ProductService, private http:Http) {
     // this.titleFilter.valueChanges
     // .debounceTime(500)
     // .subscribe(value=>{this.keyword = value})
     //let myHeaders:Headers = new Headers();
     //myHeaders.append("Authorization","Basic 123456");//请求头里加参数？
  }

  ngOnInit() {
  	this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
      );
    //console.log(this.products)
  }

}

