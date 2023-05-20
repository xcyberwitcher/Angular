import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit{

  public flightList:any;
  public tempData: any;
  constructor(private flightService:FlightService){}
  
  ngOnInit():void {
    this.getFlightDetails();
  }
  public getFlightDetails(){
   this.flightService.getFlightList().subscribe((response:any)=>{
      console.log(response);  
      this.flightList = response;
      this.tempData = this.flightList;
    });
  }
  public getSelectedInfo(event:any){
    console.log(event.target.value)
    this.flightList = this.tempData.filter((user:any)=>{
      return user.country === event.target.value;
    })
  }


  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'name' },
    { field: 'country' },
    { field: 'head_quaters'},
    { field: 'website'},
    { field: 'established'}
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
