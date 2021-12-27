import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {
  
  public UserForm!:FormGroup


  constructor(private formbuilder:FormBuilder,
              private http:HttpClient, private route:Router         
     ) { }

  ngOnInit(): void {

  this.UserForm=this.formbuilder.group({
      title:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      dob:['',Validators.required],
      contactno:['',[Validators.required, Validators.max(10)]],
      password:['',Validators.required], 
      confirmpassword:['',Validators.required],
      roleId:[''],
      username:[''],
      status:[''],
      })
    }  
    // get getControl(){
    //   return this.UserForm.controls;
    // }
    get f() {

      return this.UserForm?.controls;
  
    }
    setemailid:any="";
    onSubmit():void
    {
    //   console.log(this.UserForm.get('titleradio')?.value);
    // console.log(this.UserForm.get('firstname')?.value);
    // console.log(this.UserForm.get('lastname')?.value);
    // console.log(this.UserForm.get('emailid')?.value);
    //  console.log(this.UserForm.get('password')?.value);
    // console.log(this.UserForm.get('dob')?.value);
    // console.log(this.UserForm.get('contactnumber')?.value);
    this.f.roleId.setValue(3);
    this.f.status.setValue('Active');
    this.f.username.setValue(this.setemailid);
    this.http.post<any>("http://localhost:29345/api/admins/CreateUser", this.UserForm.value)

    .subscribe(res =>{
 
     console.log(this.UserForm.value);
 
      alert("Patient registration successfully...!")
 
      this.UserForm.reset();
 
    },err=>{
 
     alert("Somthing went wrong  ...!")
 
    })
    }

    BacktoLogin(){
      this.route.navigateByUrl('');
    }



}
