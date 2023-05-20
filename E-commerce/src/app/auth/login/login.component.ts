import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
  }
  public userForm:any
  ngOnInit(): void {
    this.loginForm();
  }
  public loginForm(){
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
    this.authService.saveUserDetails(this.userForm.value);
    this.OnCancel();
    console.log(this.userForm);
  }
  public OnCancel(){
    this.dialogRef.close();
   }
}
