import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
categoryList = ["Electronics","Cloth","Furniture"];
getCategoryList(){
   return this.categoryList;
  }
  public items = [{
    "Electronics":[
      {
       brandName:"Dell",
       price:30000,
       color:"black",
       imagePath:"https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg"
      },
    {
      brandName:"Hp",
      price:10000,
      color:"red",
      imagePath:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"

   }
  ],

  "Cloth":[
    {
      brandName:"Allensoly",
      price:3000,
      color:"grey",
      imagePath:"https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg"
   },
   {
    brandName:"PeterEngland",
    price:4500,
    color:"olivegreen",
    imagePath:"https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_960_720.jpg"

 }],
  "Furniture":[{
    brandName:" Godrej",
    price:6500,
    color:"red",
    
    imagePath:"https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg"
  },
{
  brandName:"IKEA Furniture",
  price:8500,
  color:"brown", 
  imagePath:"https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_960_720.jpg"
}]

}]
getItems(){
  return this.items;
 }
}
