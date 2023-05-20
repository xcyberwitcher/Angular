import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  
  @Input() studentDetails:any;

  public columnDefs: ColDef[] = [
    { field: 'name'},
    { field: 'age'},
    { field: 'email'},
    { field: 'contactnumber'}
  ];
  public defaultColDef: ColDef = {
    editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  }
