import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  ngDoCheck(): void {
    console.log("Executing  ngDoCheck()");
  }
  ngOnInit(): void {
    console.log("Executing ngOnInit()");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Executing  ngOnChanges()");
  }
  ngOnDestroy(): void {
    console.log("Executing ngOnDestroy()");
  }
}
