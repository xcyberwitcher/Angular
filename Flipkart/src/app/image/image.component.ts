import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  public imagepath ="";
   
  public getSetting(){
    alert("User Click")
  }

public brandArray:any=[{
    name:"Realme7",
    price:15000,
},
{
name:"redmiNote9",
price:13000,
}
]

getBrandPrice(event:any){

if(event){
  let selectedBrand =event.target.value;
  if(selectedBrand!="default"){
    let filterBrandArray= this.brandArray.filter((brand:any )=>{
     return brand.name==selectedBrand;
    })
    alert("Selected Brand Price is :" + filterBrandArray[0].price)
  }
  else{
    alert("Please Select Valid Brand") 
  }
  }
}

}
