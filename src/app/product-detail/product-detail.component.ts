import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product,ProductService,Comment } from "../share/product.service";
import { WebSocketService } from "../share/websocket.service";
import { Subscription } from "rxjs";

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

  private isWatch = false;

  private currenntBid:number;

  private subscription : Subscription;

  constructor(private routeInfo: ActivatedRoute,
  			      private productService: ProductService,
              private wsService: WebSocketService
  	) { }

  ngOnInit() {
  	//参数快照获得商品Id
  	let productId:number = this.routeInfo.snapshot.params["productId"];

  	this.productService.getProduct(productId).subscribe(product =>
      {
        this.product = product
        this.currenntBid = this.product.price;
      });
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
  watchProduct(){
    if(this.subscription){
      this.subscription.unsubscribe();
      this.isWatch = false;
      this.subscription = null;
    }else{
      this.isWatch = true;
      this.subscription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
    .subscribe(
        products => {
          let product = products.find(p => p.productId === this.product.id);
          this.currenntBid = product.bid;
        }
      );
    }

  }

}
