import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent {
  public furniture:any=[{
    furnitureType:"Plywood",
    cost:17000,
    colour:"red",
    brand:"triveni"
},
{
  furnitureType:"trywood",
    cost:19000,
    colour:"brown",
    brand:"prine"
}]
}
