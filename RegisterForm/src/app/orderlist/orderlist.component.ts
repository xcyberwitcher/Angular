import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {
  constructor(private route:Router){}

  onBack(){
    this.route.navigate(["/cartlist"]);
  }
}
