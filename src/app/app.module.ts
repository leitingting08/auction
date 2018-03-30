import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from "@angular/router";
import {ProductService} from "./share/product.service";
import { MultiplePipe } from './pipe/multiple.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipe/filter.pipe';
import { TableTreeComponent } from './share/table-tree/table-tree.component';


const routeConfig: Routes = [
  {path:'', component:HomeComponent},
  {path:'product/:productId', component:ProductDetailComponent},
  {path:'pipe', component:PipeDemoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    MultiplePipe,
    PipeDemoComponent,
    FilterPipe,
    TableTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
