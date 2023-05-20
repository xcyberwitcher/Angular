import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation:ViewEncapsulation.Emulated
  //if we use none then global css not working and use emulated then working
})
export class ParentComponent implements OnInit, OnChanges{

  constructor(private ser:CommonService) {}
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    this.ser.getCommonData().subscribe((resp:any)=>{
      console.log(resp);
      
    })
  }
  }

