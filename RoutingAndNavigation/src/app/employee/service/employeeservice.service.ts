import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  constructor(private http:HttpClient) {}
  public getEmployees(){
   return this.http.get("http://localhost:8080/employeemanagement/getEmployeeDetails");
  }
  public saveEmployee(employeeData:any){
  return this.http.post("localhost:8080/employeemanagement/saveEmployeeDetails",employeeData);
  }
}
