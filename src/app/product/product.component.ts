import { Component, OnInit } from '@angular/core';
import {Product,ProductService} from "../share/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	private products:Product[];
  private imgUrl = 'http://placehold.it/260x150';
  constructor(private productService:ProductService) { }

  ngOnInit() {
  	this.products = this.productService.getProducts();
  }

}

