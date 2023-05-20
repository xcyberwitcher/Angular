import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantRoutingModule } from './grant-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    GrantRoutingModule
  ]
})
export class GrantModule { }
