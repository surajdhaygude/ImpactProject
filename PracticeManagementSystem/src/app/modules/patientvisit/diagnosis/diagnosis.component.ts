import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosisdetails!: FormGroup;
  diagnosisList : any = [];
  isdiagnosis: boolean = true;
  constructor(private formBuilder : FormBuilder, private router:Router) { 
    this.diagnosisdetails = this.formBuilder.group({
      diagnosisCode: ['',Validators.required],
      diagnosisDescription: ['',Validators.required],
      //diagnosisIsDepricated: ['',Validators.required],
    })
  }

  ngOnInit(): void {

    
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
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
   ];
   Code=[
    "101",
    "102",
    "103",
    "104",
    "105",
    "105",
   ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  addDiagnosis(){
    // debugger;
    // this.diagnosisList.push(this.diagnosisdetails.value); 
    // this.diagnosisdetails.reset();
    // //this.resetDiagnosis();
    this.diagnosisList=this.diagnosisdetails.value
    console.log(this.diagnosisList)
    alert("Diagnosis Added successfully...!")
  }
  removeDiagnosis(element:any){
    this.diagnosisList.forEach((value: any, index:any)=>{
      if(value == element)
      this.diagnosisList.splice(index,1)
    });
  }
  Back(){
     this.router.navigateByUrl("medication");
  }


}
