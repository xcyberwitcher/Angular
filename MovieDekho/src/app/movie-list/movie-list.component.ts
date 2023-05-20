import { Component, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { MovieService } from "../service/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  public movieList:any

  constructor(private movieService:MovieService){}

  ngOnInit():void {
    this.getMovieDetails();
  }
  
  public getMovieDetails(){
   this.movieService.getMovieList().subscribe((response:any)=>{
      console.log(response);  
      this.movieList = response["production_companies"];
      //console.log(this.movieList);
      
    });
  
  }
 
  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'name' },
    // { field: 'vote_average'},
    // { field: 'vote_count'}
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
