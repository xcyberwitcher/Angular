import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
    public brandArray:any=[{
           name:"Realme7",
           color:"blue",
           price:15000,
           brand:"Realme"
    },
    {
      name:"redmiNote9",
      color:"black",
      price:13000,
      brand:"Redmi"
}]
getBrandPrice(event:any){
  console.log(event);
  alert("mobile price")
  
}
}
