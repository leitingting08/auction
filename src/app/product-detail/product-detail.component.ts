import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productTitle:string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
  	//参数拍照
  	this.productTitle = this.routeInfo.snapshot.params["productTitle"]
  }

}
