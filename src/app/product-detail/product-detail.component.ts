import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product,ProductService,Comment } from "../share/product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private product:Product;

  private comments:Comment[];

  private newRating:number = 5;

  private newComment:string = "";

  private isCommentHide = true;

  constructor(private routeInfo: ActivatedRoute,
  			      private productService: ProductService
  	) { }

  ngOnInit() {
  	//参数快照获得商品Id
  	let productId:number = this.routeInfo.snapshot.params["productId"];

  	this.productService.getProduct(productId).subscribe(product => this.product = product);
    this.productService.getCommentsForProductId(productId).subscribe(comments=>this.comments = comments);
    // console.log(this.product)
    //console.log(this.comments)

  }

  addComment(){
    let comment = new Comment(0 , this.product.id , new Date().toISOString() , "someone" , this.newRating , this.newComment );
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.star = sum/this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHide = true;
  }

}
