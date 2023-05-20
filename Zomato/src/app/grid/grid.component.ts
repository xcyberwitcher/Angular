import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent{


  // columnDefs:any;
  // defaultColDef:any;
  gridData:any;
  @Input()resturantDetails:any;
  @Input()gridColumn:any;
  @Input()gridConfig:any;
  
  @Output() emitData:any= new EventEmitter();

  updateRowData(eventData:any){
      // console.log(eventData.data);
      this.emitData.emit(eventData.data);
  }
  ngOnInit():void{
    console.log(this.resturantDetails);
    this.gridData = this.resturantDetails;    
  }
}
