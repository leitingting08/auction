import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Product,ProductService} from "../share/product.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	private products:Product[];

	private keyword:string;

	private titleFilter:FormControl = new FormControl();

    private imgUrl = 'http://placehold.it/260x150';

  constructor(private productService:ProductService) { 
     this.titleFilter.valueChanges
     .debounceTime(500)
     .subscribe(value=>{this.keyword = value})
  }

  ngOnInit() {
  	this.products = this.productService.getProducts();
  }

}

