import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  printFormControl(formcontrolobj:any){
  console.log(formcontrolobj);
  }
  public submitForm(form:any){
    console.log(form);
  }    
 }

