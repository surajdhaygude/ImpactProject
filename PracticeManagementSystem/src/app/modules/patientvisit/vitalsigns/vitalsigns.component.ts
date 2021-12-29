import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-vitalsigns',
  templateUrl: './vitalsigns.component.html',
  styleUrls: ['./vitalsigns.component.css']
})
export class VitalsignsComponent implements OnInit {
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  vitalsigndetails !: FormGroup;
  constructor(private fb:FormBuilder , private router:Router,private service:PatientvisitService){
    this.vitalsigndetails = this.fb.group({
      patientId:['',Validators.required],
      physicianId:['',Validators.required],
      createdBy:[''],
      height: ['',Validators.required],
      weight: ['',Validators.required],
      bloodPressure: ['',Validators.required],
      bodyTemperature: ['',Validators.required],
      respirationRate: ['',Validators.required],
     
  })
}
patientdata:any[]=[];
phyasiciandata:any[]=[];
  ngOnInit(): void {

    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    debugger
    this.service.GetPatientUsers().subscribe(
      (data: any[]) => {
    debugger

        this.patientdata = data;
      })
      this.service.GetPhyasicanUsers().subscribe(
        (data: any[]) => {
      debugger
          this.phyasiciandata = data;
        })
  }
  get f() {

    return this.vitalsigndetails?.controls;

  }
  addVitalSign(){

    debugger;
 
    this.f.createdBy.setValue(this.currentUserId);
    this.service.AddPatientVitalSign(this.vitalsigndetails.value).subscribe(res =>{
    alert("Patient Vital sign details added successfully...!")
    this.vitalsigndetails.reset();
    this.router.navigateByUrl('nursescheduling');
    },err=>{
     alert("Somthing went wrong...!")
    })

  }
}
