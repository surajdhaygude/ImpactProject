import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  patientmedForm !:FormGroup;
  medicationList : any = [];
  constructor(private formBuilder : FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.patientmedForm = this.formBuilder.group({
      
      drugName: ['',Validators.required],
      drugMfg: ['',Validators.required],
      drugForm: ['',Validators.required],
      drugStrength: ['',Validators.required],
      activeIngredient:['',Validators.required]
    })
   

  }



  medication=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  addMedication(){

     this.medicationList=this.patientmedForm.value;
     
     console.log(this.medicationList)
     alert("Medication Added sucessfully!")
  }

}
