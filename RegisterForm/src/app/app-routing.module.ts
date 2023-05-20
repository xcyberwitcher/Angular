import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartlistComponent } from './cartlist/cartlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserListComponent
  },
  {
    path:'orderlist',
    component:OrderlistComponent,
  },
  {
    path:'cartlist',
    component:CartlistComponent
  },
  {
    path:'report',
    loadChildren:()=>import('./report/report.module').then(m=>m.ReportModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
