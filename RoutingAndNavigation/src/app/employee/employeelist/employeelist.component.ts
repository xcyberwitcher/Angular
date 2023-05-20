import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { EmployeeformComponent } from '../employeeform/employeeform.component';
import { EmployeeserviceService } from '../service/employeeservice.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit  {
  empList: any;
  constructor(private empService :EmployeeserviceService ,
    private dialog: MatDialog,private detechanges:ChangeDetectorRef) { 
 }

 ngOnInit(): void {
  this.fillGrid();
 }
 public fillGrid(){
  this.empService.getEmployees().subscribe((res:any)=>{
    this.empList = res;
  })
 }

 public openUserForm(operationType:any,data?:any) {
   const dialogRef = this.dialog.open(EmployeeformComponent,{data:{operationTye:operationType,formData:data
   }});

   dialogRef.afterClosed().subscribe((result:any) => {
     this.fillGrid();
   });
 }
  
 onRowClicked(eventData:any){
   this.openUserForm('view',eventData);
 }

 public userListGridColumns: ColDef[] = [
   { field: 'employeeNumber' },
   { field: 'fullName'},
   { field: 'gender'},
   { field: 'mailId'},
   { field: 'band'},
   { field: 'role'},
   { field: 'employeeStartDate'},
   { field: 'employeeStatus'}
 ];

 public userListGridConfig: ColDef = {
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
