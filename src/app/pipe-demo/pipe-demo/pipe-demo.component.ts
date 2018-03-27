import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {
  
  birthday:Date = new Date();

  pi:number = 3;

  size:number = 7;

  constructor() { }

  ngOnInit() {
  }

}
