import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { ActionComponent } from '../action/action.component';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { UserService } from '../service/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit ,OnChanges{

  constructor(private userService :UserService ,
     private dialog: MatDialog,private detechanges:ChangeDetectorRef) { 
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userList = this.userService.getUserDetails();
  }
  ngOnInit(): void {

  }
  public getUserDetails(){
    this.userList = this.userService.userDataList;
  }

  public userList:any

  public openUserForm(operationType:any,data?:any) {
    const dialogRef = this.dialog.open(FormBuilderComponent,{data:{operationTye:operationType,formData:data
    }});

    dialogRef.afterClosed().subscribe((result:any) => {
      this.userList=[];
     const userListFromService = this.userService.getUserDetails();
      this.userList = userListFromService.map((each:any)=>each)
    });
  }
  
  onRowClicked(eventData:any){
    this.openUserForm('view',eventData);
  }

  public userListGridColumns: ColDef[] = [
    { field: 'name' },
    { field: 'email'},
    { field: 'contact'},
    { field: 'address'},
    { field: 'state'},
    { field: 'country'},
    { field: 'pincode'},
    {field: 'action',cellRenderer: ActionComponent,
     minWidth:200,
    cellRendererParams:{
      view:true,
      edit:true,
      delete:true
    }
    }
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
