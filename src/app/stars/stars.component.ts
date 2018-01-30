import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
//input装饰器，星级评价的组件的rating属性应该由他的父组件传递给它
  @Input()
  private rating:number = 0;

  private stars:boolean[];

  constructor() { }

  ngOnInit() {
  	this.stars = [];
  	for(let i=1;i<=5;i++){
  		this.stars.push(i>this.rating)
  	}
  	//this.stars=[true,true,true,false,false];
  }

}
