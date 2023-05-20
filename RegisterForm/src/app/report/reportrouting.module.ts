import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { OrderreportComponent } from './orderreport/orderreport.component';
import { ProductreportComponent } from './productreport/productreport.component';

const routes:Routes = [
  {
    path:'',
    component:OrderlistComponent
  },
  {
    path:'orderreport',
    component:OrderreportComponent
  },
  {
    path:'productreport',
    component:ProductreportComponent
  },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ReportroutingModule { }
