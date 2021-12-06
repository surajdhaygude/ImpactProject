import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  public Patientform!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, 
    private route:Router, private Patientuser:PatientService) { }

  ngOnInit(): void {

    this.Patientform=this.formbuilder.group({
      PatientName:['',Validators.required],
      EmailId:['',[Validators.required, Validators.email]],
      Dateofbirth:['',Validators.required],
      Status:['',Validators.required],
      })
  }

  AddPatient(){   
    debugger;
    this.Patientuser.AddPatientrecords(this.Patientform.value).subscribe(res =>{
    alert("Patient details successfully...!")
    this.Patientform.reset();
    this.route.navigateByUrl('patientusermanagement');

    },err=>{
     alert("Somthing went wrong...!")
    })
   }
   backtopatient():void{
    this.route.navigateByUrl('patientusermanagement');
   }


}
