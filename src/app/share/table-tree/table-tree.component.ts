import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-tree',
  templateUrl: './table-tree.component.html',
  styleUrls: ['./table-tree.component.scss']
})
export class TableTreeComponent implements  OnInit {
	@Input() directories;
	@Input() files;
	@Output() callblackEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
