import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrantModule } from "./grant/grant.module";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        GrandchildComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GrantModule
    ]
})
export class AppModule { }
