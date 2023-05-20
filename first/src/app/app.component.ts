import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';

  public subjectName:any = "Typescript";
      public subject = {
        name:"java",
        version:"19"
      }
      public fruits =["Apple","Banana","Orange","Mango"];

      public getfruitArray() {
       this.fruits.forEach(fruit => {
          console.log(fruit);
          
        
       });
      }
      public employee =[
          {
            name:"subodh",
            age:"25",
            dept:"Java Developer"
          },
          {
            name:"nishant",
            age:"27",
            dept:"Java Developer"
          }
      ]



}
