import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  implements OnInit {


  @Input() gridcolumn:any
  @Input() gridconf:any
  gridData:any;
  @Input() movieDetails:any

  ngOnInit():void{
    this.gridData = this.movieDetails;  
  }

}
