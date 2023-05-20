import { Component } from '@angular/core';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private studentService:StudentService){}

  public studentList = this.studentService.getStudentData();

  

}
