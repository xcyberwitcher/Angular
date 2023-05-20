import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgGCHeaderComponent } from './ng-g-c-header/ng-g-c-header.component';
import { ImageComponent } from './image/image.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NgGCHeaderComponent,
    ImageComponent,
    TableComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
