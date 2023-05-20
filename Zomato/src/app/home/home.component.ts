import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ColDef } from 'ag-grid-community';
   
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonservice : CommonService){}

  ngOnInit():void{
    this.findResturant();
  }

  restaurentList:any;

  public findResturant(){
    this.restaurentList = this.commonservice. getResturantList();
  }
  public columnDefs: ColDef[] = [
    { field: 'restaurentName'},
    { field: 'type'},
    { field: 'averagePrice' },
    { field: 'address' },
    { field: 'rating' },
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

  public receiveData(data:any){
    console.log(data);

  }

}
