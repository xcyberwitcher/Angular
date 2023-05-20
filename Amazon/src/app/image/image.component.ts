import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  constructor(){}
  @Input() imagePath : any;
  
  @Output() dataFromChildComponent :any = new EventEmitter();

  sendData(){
    this.dataFromChildComponent.emit("This data is coming from Home Componet")
  }
}
