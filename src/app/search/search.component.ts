import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

private departs = [
    {name:'全选'},
    {name:'张三'},
    {name:'李四'},
    {name:'王五'}
  ]

 //全选
  checked(m){
      this.checkAll(m,m.checked[0]);
　 }

  checkAll(dir,boolean){
     dir.checked=[];
     dir.forEach(i=>{
     	dir.checked.push(boolean);
     })
  }
}
