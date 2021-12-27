import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosisdetails!: FormGroup;
  diagnosisList : any = [];
  isdiagnosis: boolean = true;
  constructor(private formBuilder : FormBuilder, private router:Router, private service:PatientvisitService) { 
    this.diagnosisdetails = this.formBuilder.group({
      diagnosisCode: ['',Validators.required],
      diagnosisDescription: ['',Validators.required],
      patientId:['20',Validators.required],
      physicianId:['4',Validators.required],
      createdby:['']
      //diagnosisIsDepricated: ['',Validators.required],
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

  diagnosis=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];
  Description=[
    "food",
    "Typhoid",
    "Drug",
    "Cholera",
    "Venom or Salivary",
    "Other",
   ];
   Code=[
    "A00",
    "B00",
    "C00",
    "D00",
    "E00",
    "F00",
   ];

   patient=[
    "Amol Sawant",
    "Anil yadav",
    "Rajesh Sharma",
    "Amit varma",
    "sunil debey",
   ];


   physician=[
    "Dr. Bhupendra Kumar",
    "Dr. Bhupendra Kumar",
    "Dr. Rajan Bhargava",
    "Dr. Rakesh Chandra",
   ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  // addDiagnosis(){
  //   this.diagnosisList=this.diagnosisdetails.value
  //   console.log(this.diagnosisList)
  //   alert("Diagnosis Added successfully...!")
  // }
  removeDiagnosis(element:any){
    this.diagnosisList.forEach((value: any, index:any)=>{
      if(value == element)
      this.diagnosisList.splice(index,1)
    });
  }
  Back(){
     this.router.navigateByUrl("medication");
  }
  get f() {

    return this.diagnosisdetails?.controls;

  }

  diagnosisadded(){
    debugger;
    // this.f.patientid.setValue(20);
    // this.f.physicianid.setValue(4);
    this.f.createdby.setValue(5);
    this.service.Adddiagnosis(this.diagnosisdetails.value).subscribe(res =>{
      console.log(this.diagnosisList)
    alert("Patient diagnosis details added successfully...!")
    this.diagnosisdetails.reset();
    this.router.navigateByUrl('patientscheduling');
    },err=>{
     alert("Somthing went wrong...!")
    })
  }

 


}
