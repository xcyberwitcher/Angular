import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeModule } from './employee/employee.module';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    EmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
