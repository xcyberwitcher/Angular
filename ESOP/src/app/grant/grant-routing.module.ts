import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  
  { path: "footer", component: FooterComponent },
  { path: "grid", component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrantRoutingModule { }
