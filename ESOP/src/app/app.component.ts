import { Component } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ser:CommonService) {
  }
  addData(){
    this.ser.setCommonData("Second data coming from behaviour subject -1")
    this.ser.setCommonData("Second data coming from behaviour subject -2")
    this.ser.setCommonData("Second data coming from behaviour subject -3")
    this.ser.setCommonData("Second data coming from behaviour subject -4")
    this.ser.commonData.complete();
  }
}
