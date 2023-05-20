import { Component} from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private commonservice : CommonService){}

public email = "subodhk@gmailcom";

public updateEmail(){

  console.log(this.email);
        
  }
//  c: any =new CommonServiceService();
  public categoryList :any = this.commonservice.getCategoryList();
  public itemsArray:any;
  public items:any= this.commonservice.getItems();

getItems(event:any){
  if(event){
    let selectedCategeory = event.target.value;
    let items:any=this.commonservice.getItems();
    let item = items[0];
    this.itemsArray = item[selectedCategeory];

  }
}
receiveData(event:any){
  console.log("This data From Home Component");
  
 }
}


