import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  departs = [
    {'name':'全选',checked:false},
    {'name':'张三',checked:false},
    {'name':'李四',checked:false},
    {'name':'王五',checked:false}
  ]
  ngOnInit() {
  }

  checkEvent(item,i){
  	
  	if(i===0){
  		console.log(0)
  		if(item.checked){
  			this.departs.forEach(m=>{m.checked = true})
  		}else{
  			this.departs.forEach(m=>{m.checked = false})
  		}
  	}else{
  		let res = this.departs.some(m=>{return !m.checked});
  		if(res){ // 如果全选以后，其中一个取消选择
  			this.departs[0].checked = false;
  		}
  		let flag = true;
  		for(var n=1;n<this.departs.length;n++){
  			if(!this.departs[n].checked){
  				flag = false;
  			}
  		}
  		if(flag){  // 如果全选以后，其他的全部选中了，就把全选按钮也选中
  			this.departs[0].checked = true;
  		}
  	}
  	console.log(this.departs[i])
  }

}
