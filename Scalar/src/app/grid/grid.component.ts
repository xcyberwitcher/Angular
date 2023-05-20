import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit , OnChanges {

ngOnChanges(changes: SimpleChanges): void {
  this.gridData = this.userDetails;
}
@Input() gridcolumn:any
@Input() gridconf:any
gridData:any;
@Input() Data:any;
@Input() userDetails:any
ngOnInit():void{
  this.gridData = this.userDetails;
}
}
