import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


//  private commonData:any = new BehaviorSubject("first time data has been itialited")
commonData:any = new AsyncSubject();
commonData$=this.commonData.asOberservable();

  constructor() {}

  setCommonData(data:any){
    this.commonData.next(data);
  }
  getCommonData(){
    return this.commonData$;
  }

}
