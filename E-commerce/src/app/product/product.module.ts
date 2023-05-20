import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductformComponent } from './productform/productform.component';


@NgModule({
  declarations: [
    ProductlistComponent,
    ProductformComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
