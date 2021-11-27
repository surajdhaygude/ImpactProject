import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {
  
  public UserForm!:FormGroup


  constructor(private formbuilder:FormBuilder,
              private http:HttpClient         
     ) { }

  ngOnInit(): void {

    this.UserForm=this.formbuilder.group({
       
      titleradio:['',Validators.required],
      firstname:['',Validators.required],
  
      lastname:['',Validators.required],
  
      emailid:['',Validators.required],
  
      dob:['',Validators.required],
  
      contactnumber:['',Validators.required],
  
      password:['',Validators.required],
  
      confirmpassword:['',Validators.required],
  
      
      })
    }  
    // get getControl(){
    //   return this.UserForm.controls;
    // }
    
    onSubmit():void
    {
    //   console.log(this.UserForm.get('titleradio')?.value);
    // console.log(this.UserForm.get('firstname')?.value);
    // console.log(this.UserForm.get('lastname')?.value);
    // console.log(this.UserForm.get('emailid')?.value);
    //  console.log(this.UserForm.get('password')?.value);
    // console.log(this.UserForm.get('dob')?.value);
    // console.log(this.UserForm.get('contactnumber')?.value);
    
    this.http.post<any>("http://localhost:3000/PatientRegistration", this.UserForm.value)

    .subscribe(res =>{
 
     console.log(this.UserForm.value);
 
      alert("Patient registration successfully...!")
 
      this.UserForm.reset();
 
    },err=>{
 
     alert("Somthing went wrong  ...!")
 
    })
    }



}
