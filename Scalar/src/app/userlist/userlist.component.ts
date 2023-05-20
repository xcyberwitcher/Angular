import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from '../userService/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

public userListdata: any;
  public tempdata: any;

constructor(private userService:UserService){}

ngOnInit():void {
  this.getUserDetails();
}

public getUserDetails(){
 this.userService.getUserList().subscribe((response:any)=>{
    console.log(response);  
    this.userListdata = response['data'];
    this.tempdata = this.userListdata;
  });

}

public getSelectedInfo(event:any){
  console.log(event.target.value)
  this.userListdata = this.tempdata.filter((user:any)=>{
    return user.first_name === event.target.value;
  })
}
public columnDefs: ColDef[] = [
  { field: 'first_name'},
  { field: 'last_name'},
  { field: 'email'},
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
