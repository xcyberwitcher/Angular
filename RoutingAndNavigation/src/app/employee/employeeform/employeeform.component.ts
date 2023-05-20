import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from '../service/employeeservice.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  constructor(private empService:EmployeeserviceService,
    private dialogRef: MatDialogRef<EmployeeformComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
  }
  public userForm:any
  ngOnInit(): void {
   this.createForm();
  }

  public createForm(){
    if(this.data && this.data['operationTye']=="create"){
    this.userForm = new FormGroup({
      employeeNumber: new FormControl(''),
      fullName: new FormControl(''),
      gender: new FormControl(''),
      mailId: new FormControl(''),
      band: new FormControl(''),
      role: new FormControl(''),
      employeeStartDate: new FormControl(''),
      employeeStatus: new FormControl('')
    });}
    else{
      this.userForm = new FormGroup({
        employeeNumber: new FormControl(this.data['formData'][' employeeNumber']),
        fullName: new FormControl(this.data['formData']['fullName']),
        gender: new FormControl(this.data['formData']['gender']),
        mailId: new FormControl(this.data['formData']['mailId']),
        band: new FormControl(this.data['formData']['band']),
        role : new FormControl(this.data['formData']['role']),
        employeeStartDate: new FormControl(this.data['formData']['employeeStartDate']),
        employeeStatus : new FormControl(this.data['formData']['employeeStatus'])
      });
    }
   }
  public submitForm(){
    this.empService.saveEmployee(this.userForm.value).subscribe(resp=>{
      this.OnCancel();
    });
  }
  public OnCancel(){
    this.dialogRef.close();
   }
}
