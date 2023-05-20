import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
const routes: Routes = [
  {
    path:'',
    component:EmployeelistComponent,
  },
  {
    path:'employeelist',
    component:EmployeelistComponent,
  },
  {
    path:'employee',
    loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
