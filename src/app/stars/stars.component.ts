import { Component, OnInit ,Input ,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges):void{
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating)
    }
  }
//input装饰器，星级评价的组件的rating属性应该由他的父组件传递给它
  @Input()
  private rating:number = 0;

  @Output()
  private  ratingChange:EventEmitter<number> = new EventEmitter();

  private stars:boolean[];
  @Input()
  private readonly:boolean = true;

  constructor() { }

  ngOnInit() {
  	
  }

  clickStar(index:number){
    if(!this.readonly){
     this.rating = index+1;
     this.ngOnInit();
      this.ratingChange.emit(this.rating);
     }
  }

}
