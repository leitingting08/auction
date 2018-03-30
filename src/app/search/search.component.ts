import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ProductService } from '../share/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    formModel:FormGroup;

    categories: string[];

  constructor(private productService:ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
        title:['',Validators.minLength(3)],
        price:[null,this.positiveNumberValidator],
        category:['-1']
    })
  }

  ngOnInit() {
      this.categories = this.productService.getAllCategories();
  }

  positiveNumberValidator(control: FormControl):any{
      if(!control.value){
          return null;
      }
      let price = parseInt(control.value);

      if(price>0){
          return null;
      }else{
          return {positiveNumber:true};
      }
  }

  onSearch(){
      if(this.formModel.valid){
          console.log(this.formModel.value);
      }
  }
//这是全选反选个别选择的例子
// private departs = [
//     {name:'全选'},
//     {name:'张三'},
//     {name:'李四'},
//     {name:'王五'}
//   ]

//  //全选
//   checked(m){
//       this.checkAll(m,m.checked[0]);
// 　 }

//   checkAll(dir,boolean){
//      dir.checked=[];
//      dir.forEach(i=>{
//      	dir.checked.push(boolean);
//      })
//   }
}
