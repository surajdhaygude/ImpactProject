import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  proceduredetails !: FormGroup;
  procedureList : any= [];
  isprocedure: boolean = true;
  constructor(private fb:FormBuilder , private router:Router) {
    this.proceduredetails = this.fb.group({
      procedureCode: ['',Validators.required],
      procedureDescription: ['',Validators.required],
      procedureIsDepricated: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  addProcedure(){
    this.procedureList=this.proceduredetails.value
    console.log(this.procedureList)
    alert("proceduredetails Added!")
  }
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


}
