import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private userService:UserService,
    private dialogRef: MatDialogRef<UserFormComponent>) { 
  }
 public submitUserform(userForm:any){
   this.userService.saveUserDetails(userForm.value);
   this.OnCancel();
  }
 
 public OnCancel(){
  this.dialogRef.close();
 }
  
 public getData(){
  return this.userService.getUserDetails();
 }

}
