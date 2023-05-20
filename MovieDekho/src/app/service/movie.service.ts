import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private httpClient:HttpClient) { }

  public getMovieList(){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/550?api_key=195a1f76cf91104999492b65bc3b1696");
  }
  
}
