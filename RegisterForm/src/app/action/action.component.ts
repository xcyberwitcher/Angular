import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements ICellRendererAngularComp {
  isEditEnabled = true
  isViewEnabled = true
  isDeleteEnabled = true

  agInit(params:ICellRendererParams<any,any>): void {
    console.log(params);
    if(params && params['colDef']){
      let gridPrams = params['colDef']['cellRendererParams'];
      this.isEditEnabled = gridPrams['edit']
      this.isViewEnabled = gridPrams['view']
      this.isDeleteEnabled = gridPrams['delete'] 
    }
    
  }

  refresh(params: any): boolean {
        return true;
  }

}
