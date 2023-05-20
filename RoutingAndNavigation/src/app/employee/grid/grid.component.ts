import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit , OnChanges{
  
   constructor(){
    console.log("Execuing Constructor");
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.gridData = this.gridDataList;
    this.gridcolumn = this.gridColumnList;
    this.gridconf = this.gridConfigObject; 
  }
  public gridcolumn:any
  public gridconf:any
  public gridData:any

  @Input() gridColumnList:any
  @Input() gridConfigObject:any
  @Input() gridDataList:any
  @Output() customEvent:any = new EventEmitter();

  rowClicked(event:any){
    console.log(event);
    this.customEvent.emit(event.data);
  }
  ngOnInit():void{
    this.gridData = this.gridDataList;
   }
  //  ngOnInit():void{
  //   console.log("Executing ngOnInit()");
  //  }
  //  ngOnChanges():void{
  //   console.log("Executing  ngOnChanges()");
  //  }
  //  ngDoCheck():void{
  //   console.log("Executing  ngDoCheck()");
  //  }


}
