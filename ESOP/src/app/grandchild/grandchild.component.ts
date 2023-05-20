import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class GrandchildComponent {

}
