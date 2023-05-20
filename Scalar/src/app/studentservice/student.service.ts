import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  public student  =[
    {
    name:"subodh",
    age:25,
    email:"subodhkv2@gmail.com",
    contactnumber:8582054029,
    educationDetails:[{
      type:"B tech",
      yearOfCompletion:2020,
      percentage:70,
      universityName:"Mrsptu"
    }],
    address:[{
      addressDetails:"Marathalli",
      city:"bangalore",
      pincode:152004,
      country:"india"
    }]
  },
  {
    name:"subodh",
    age:25,
    email:"subodhkv2@gmail.com",
    contactnumber:8582054029,
    educationDetails:[{
      type:"B tech",
      yearOfCompletion:2020,
      percentage:70,
      universityName:"Mrsptu"
    }],
    address:[{
      addressDetails:"Marathalli",
      city:"bangalore",
      pincode:152004,
      country:"india"
    }]
  }
]

public getStudentData(){
  return this.student;
}
}
