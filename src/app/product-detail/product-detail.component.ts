import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Product,ProductService,Comment} from "../share/product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  comments:Comment[];

  constructor(private routeInfo: ActivatedRoute,
  			      private productService: ProductService
  	) { }

  ngOnInit() {
  	//参数快照获得商品Id
  	let productId:number = this.routeInfo.snapshot.params["productId"];

  	this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);

  }

}
