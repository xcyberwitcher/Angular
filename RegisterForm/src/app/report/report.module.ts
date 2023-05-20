import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { OrderreportComponent } from './orderreport/orderreport.component';
import { ProductreportComponent } from './productreport/productreport.component';
import { ReportroutingModule } from './reportrouting.module';



@NgModule({
  declarations: [
    ReportlistComponent,
    OrderreportComponent,
    ProductreportComponent
  ],
  imports: [
    CommonModule ,
    ReportroutingModule

  ]
})
export class ReportModule { }
