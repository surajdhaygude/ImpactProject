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
 
    this.f.createdBy.setValue(2);
    this.service.AddPatientVitalSign(this.vitalsigndetails.value).subscribe(res =>{
    alert("Patient Vital sign details added successfully...!")
    this.vitalsigndetails.reset();
    this.router.navigateByUrl('patientscheduling');
    },err=>{
     alert("Somthing went wrong...!")
    })

  }
}
