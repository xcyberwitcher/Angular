import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  constructor(private userService:UserService,
    private dialogRef: MatDialogRef<FormBuilderComponent>,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
  }
  public userForm:any
  ngOnInit(): void {
    this.createForm();
  }
  public createForm(){
  if(this.data && this.data['operationTye']=="create"){
  this.userForm = this.formBuilder.group({
    name:[''],
    email:this.formBuilder.control(''),
    password:[''],
    contact:[''],
    address:[''],
    pinCode:[''],
    country:[''],
    state:[''],
  });
}
else{
  this.userForm = this.formBuilder.group({
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
