import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  
  constructor(private userService:UserService,
    private dialogRef: MatDialogRef<ReactiveformComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
  }
  public userForm:any
  ngOnInit(): void {
   this.createForm();
  }

  public createForm(){
    if(this.data && this.data['operationTye']=="create"){
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      contact: new FormControl(''),
      address: new FormControl(''),
      pincode: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl('')
    });}
    else{
      this.userForm = new FormGroup({
        name: new FormControl(this.data['formData']['name']),
        email: new FormControl(this.data['formData']['email']),
        password: new FormControl(this.data['formData']['password']),
        contact: new FormControl(this.data['formData']['contact']),
        address: new FormControl(this.data['formData']['address']),
        pincode: new FormControl(this.data['formData']['pincode']),
        state: new FormControl(this.data['formData']['state']),
        country: new FormControl(this.data['formData']['country'])
      });
    }
   }
  public submitForm(){
    this.userService.saveUserDetails(this.userForm.value);
    this.OnCancel();
    console.log(this.userForm);
  }
  public OnCancel(){
    this.dialogRef.close();
   }

}
