import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airlines';
  public arr:any = ["Spring","java","Subodh","Hello"];
  public isDisplay = true;
  tainerName="subodh";
  printValue(){
    console.log(this.title);
    
  }
}
