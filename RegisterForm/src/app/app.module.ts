import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionComponent } from './action/action.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import {MatButtonModule} from '@angular/material/button';
import { CartlistComponent } from './cartlist/cartlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    UserListComponent,
    UserFormComponent,
    ActionComponent,
    ReactiveformComponent,
    FormBuilderComponent,
    CartlistComponent,
    OrderlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
