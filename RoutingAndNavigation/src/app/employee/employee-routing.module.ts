import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeelistComponent
  },
  {
    path:'employeelist',
    component:EmployeelistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
