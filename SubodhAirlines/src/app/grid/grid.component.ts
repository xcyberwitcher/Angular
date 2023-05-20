import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit , OnChanges{
  
  ngOnChanges(changes: SimpleChanges): void {
    this.gridData = this.flightDetails;
  }
  @Input() gridcolumn:any
  @Input() gridconf:any
  gridData:any;
  @Input() flightDetails:any
  @Input() filterFlight:any

  ngOnInit():void{
    this.gridData = this.flightDetails;
    this.gridData = this.filterFlight;
  
  }
}
