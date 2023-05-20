import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit , OnChanges{


  @Output() customEvent:any = new EventEmitter();
  
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

  ngOnInit():void{
   this.gridData = this.gridDataList;
  }
  rowClicked(event:any){
    console.log(event);
    this.customEvent.emit(event.data);
  }
}



