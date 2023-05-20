import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  
constructor(private comm:CommonService){}

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    this.comm.getCommonData().subscribe((resp:any)=>{
      console.log(resp);
      
    })
  }

}
