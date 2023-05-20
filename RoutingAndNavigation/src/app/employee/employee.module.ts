import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent,
    GridComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, EmployeelistComponent]
})
export class EmployeeModule { }
