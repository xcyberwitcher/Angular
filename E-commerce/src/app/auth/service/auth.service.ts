import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public userDataList:any=[];
  
  public saveUserDetails(userData:any){
    this.userDataList.push(userData);
  }
  public getUserDetails(){
    return this.userDataList;
  }
}
