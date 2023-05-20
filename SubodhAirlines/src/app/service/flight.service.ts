import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
 
  constructor(private httpClient:HttpClient) { }

  public getFlightList(){
    return this.httpClient.get("https://api.instantwebtools.net/v1/airlines");
  }


}
