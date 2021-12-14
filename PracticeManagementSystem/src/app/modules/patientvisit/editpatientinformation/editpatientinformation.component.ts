import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpatientinformation',
  templateUrl: './editpatientinformation.component.html',
  styleUrls: ['./editpatientinformation.component.css']
})
export class EditpatientinformationComponent implements OnInit {
  patientDetails: any;
  EmerencyInfo: any;
  isReadonly = true;
  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    
 this.patientDetails = this.formBuilder.group({
  patientid :['',Validators.required], 
  fname :['' ,Validators.required],
  lname :['',Validators.required],
  dob :['',Validators.required],
  age :['',Validators.required],
  gender:['',Validators.required],
  race:['',Validators.required],
  ethinicity:['',Validators.required],
  languagesKnown :['',Validators.required],
  email :['',Validators.required],
  homeAddress :['',Validators.required],
  contactNumber :['',Validators.required],
  Title :['',Validators.required],
  emergencyFname :['',Validators.minLength(2)],
  emergencyLname :['',Validators.minLength , Validators.minLength(2)],
  relationship: ['',Validators.required],
  emergencyEmail: ['',Validators.required],
  EmergencyMobileNo: ['',Validators.required],
  emergencyAddress: ['',Validators.required],
 });

//  this.EmerencyInfo = this.formBuilder.group({
//   patientid :[''],
//   emergencyFname :['',Validators.minLength(2)],
//   emergencyLname :['',Validators.minLength , Validators.minLength(2)],
//   relationship: ['',Validators.required],
//   emergencyEmail: ['',Validators.required],
//   EmergencyMobileNo: ['',Validators.required],
//   emergencyAddress: ['',Validators.required],
//   title :['']
// })
  }

  MyProfil : any ;
  fname:any;
  lname : any;
  dob !: Date;
  gender !: string;
  email !: string;

  getMyprofile(){
 
  }
   
 updatebasicdetails(){
  
 }
 
 getPatientdetails(){
  
 }
 
 savePatient() {
 
 }

 Relation =[
  "Father",
  "Mother",
  "Other"
];

 toggleReadonly() {
  this.isReadonly = !this.isReadonly;
}
toggleDiable() {
 // this.isReadonly = true;
  this.router.navigateByUrl('patientinformation');
}

}
