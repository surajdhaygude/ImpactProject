import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientinformationService } from 'src/app/patientinformation.service';
import { PatientschedulingComponent } from '../../scheduling/patientscheduling/patientscheduling.component';

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
   age: any=0;

   localUser:any="";
  currentUser:any="";
  currentUserId:any="";

  constructor(
    private formBuilder : FormBuilder, 
    private router : Router,
    private fb:FormBuilder, 
    private service:PatientinformationService,
    
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
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    // var patientuser= localStorage.getItem('currentUser');
    // var user = JSON.parse(patientuser);
    // this.pId= user.userid; 
    // this.Patientid=user.userid;
    // console.log(this.pId);

    this.patientDetails = this.formBuilder.group({
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
      //Title :[''],

    ////Emergency details controls
      //patientid :[''],
      emergencyFname :[''],
      emergencyLname :[''],
      relationship: ['' ],
      emergencyEmail: ['' ],
      emergencyMobileNo: [''] ,
      emergencyAddress: [''],
      title :[''],
      portalaccess:[''],
      userId:['']
      
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
  get f() {

    return this.patientDetails?.controls;

  }
  AddDemographicInfo(){   
    debugger;
    this.f.userId.setValue(this.currentUserId);
    this.service.AddDemographics(this.patientDetails.value).subscribe(res =>{
    alert("Patient Demographics details added successfully...!")
    this.patientDetails.reset();
    this.router.navigateByUrl('patientscheduling');
    },err=>{
     alert("Somthing went wrong...!")
    })
   }

   timeDiff:any="";
   public CalculateAge(date:any): void
     {
       debugger
         if(date){
            this.timeDiff = Math.abs(Date.now() - date);
            this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
        }
    }
  

}
