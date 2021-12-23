import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demographicinformation',
  templateUrl: './demographicinformation.component.html',
  styleUrls: ['./demographicinformation.component.css']
})
export class DemographicinformationComponent implements OnInit {

  Allery !: FormGroup 
  allergyList :any;
  isallergy: boolean = true; // hidden by default
  patientDetails!: FormGroup 
  // EmerencyInfo !: FormGroup
  isReadonly = true;
  MyProfil : any ;
  fname:any;
  lname : any;
  dob : Date=new Date();
  gender : string="";
  email: string="";

  constructor(
    private formBuilder : FormBuilder, 
    private router : Router,
    private fb:FormBuilder, 
  ) {
    this.allergyList = [];
      this.Allery = this.fb.group({
        allergyType: ['', Validators.required],
        allergyName: ['', Validators.required],
        //isallergyfatal: ['', Validators.required],
      })
   }

   Patientid : any;
   public pId:string="";
    ngOnInit(): void {
    debugger;
    // var patientuser= localStorage.getItem('currentUser');
    // var user = JSON.parse(patientuser);
    // this.pId= user.userid; 
    // this.Patientid=user.userid;
    // console.log(this.pId);

    this.patientDetails = this.formBuilder.group({
      patientid :[''], 
      fname :['' ],
      lname :[''],
      dob :[''],
      age :[''],
      gender:[''],
      race:[''],
      ethinicity:[''],
      languagesKnown :[''],
      email :[''],
      homeAddress :[''],
      contactNumber :[''],
      Title :[''],

    ////Emergency details controls
      //patientid :[''],
      emergencyFname :['',Validators.minLength(2) ],
      emergencyLname :['',Validators.minLength , Validators.minLength(2)],
      relationship: ['' ],
      emergencyEmail: ['' ],
      EmergencyMobileNo: ['' ],
      emergencyAddress: ['' ],
      title :[''],
      portalaccess:['']
     });
    
    //  this.EmerencyInfo = this.formBuilder.group({
      
    // })
   }
   alergy=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];

  backtodashboard(){
    this.router.navigateByUrl('patientdashboard')
  }

  Canceltodashboard(){
    this.router.navigateByUrl('patientscheduling')
  }

  

}
