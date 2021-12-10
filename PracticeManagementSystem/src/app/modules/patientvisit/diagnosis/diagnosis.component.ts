import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

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

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

   Allery: FormGroup = this.formBuilder.group({
   Typeofallery :['' , Validators.required],
   alleryname :['',Validators.required]   
   });

}
