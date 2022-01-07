import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { PatientinformationService } from 'src/app/patientinformation.service';
import { PatientschedulingComponent } from '../../scheduling/patientscheduling/patientscheduling.component';

@Component({
  selector: 'app-demographicinformation',
  templateUrl: './demographicinformation.component.html',
  styleUrls: ['./demographicinformation.component.css']
})
export class DemographicinformationComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

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
  age:string="";

   title:string="";
   firstname:any;
   lastname:any;
   emailId:any;
   contactNo:any;

   localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  patientdemodata!:any;
  setDOBFormat:any="";
  timeDiff:any="";
  constructor(
    private formBuilder : FormBuilder, 
    private router : Router,
    private fb:FormBuilder, 
    private notifyService : NotificationService,
    private service:PatientinformationService,
    private route:Router
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
      typeofAllergies:[''],
      userId:[''],
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
      createdDate:['']
      
     });

    
debugger
     this.service.Getbyuseriddemoinfo(this.currentUserId).subscribe(

      (data:any)=>{
        debugger
        this.patientdemodata=data;
        this.showTitle=this.patientdemodata.title;
        this.showFirstName=this.patientdemodata.firstname;
        this.showLastName=this.patientdemodata.lastname;
        this.showEmailId=this.patientdemodata.emailId;
        this.showDOB=this.patientdemodata.dob;
        this.showContactNo=this.patientdemodata.contactNo;
      //    if(this.showDOB){
      // debugger;
      // this.timeDiff = Math.abs(Date.now() - this.showDOB);
      // this.age = (Math.floor((this.timeDiff / (1000 * 3600 * 24))/365)).toString();
    //}
        console.log(this.patientdemodata)
        //this.title=this.patientdemodata.firstname
      }
    )

    // this.loadingFieldsOnInIt();
    
    //  this.EmerencyInfo = this.formBuilder.group({
      
    // })
   }

   showTitle!:any;
   showFirstName!:any;
   showLastName!:any;
   showEmailId!:any;
   showDOB!:any;
   showContactNo!:any;   

   loadingFieldsOnInIt(){
    this.showTitle=this.patientdemodata.title;
    this.showFirstName=this.patientdemodata.firstname;
    this.showLastName=this.patientdemodata.lastname;
    this.showEmailId=this.patientdemodata.emailId;
    this.showDOB=this.patientdemodata.dob;
    this.showContactNo=this.patientdemodata.contactNo;
   

   }

  backtodashboard(){
    this.router.navigateByUrl('patientdashboard')
  }

  Canceltodashboard(){
    this.router.navigateByUrl('patientscheduling')
  }
  get f() {

    return this.patientDetails?.controls;

  }

  getDOB:any="";
  AddDemographicInfo(){   
    debugger;
    this.f.fname.setValue(this.showFirstName);
    this.f.lname.setValue(this.showLastName);
    this.f.email.setValue(this.showEmailId);
    this.f.contactNumber.setValue(this.showContactNo);

    this.f.userId.setValue(this.currentUserId);
    // this.f.dob.setValue("1995-12-31");
    this.f.typeofAllergies.setValue("No");
    this.f.createdDate.setValue("2021-12-30");
    debugger;
    this.service.AddDemographics(this.patientDetails.value).subscribe(res =>{
    // alert("Patient Demographics details added successfully...!")
    this.notifyService.showSuccess("Patient Demographics details added successfully...!", "Success");

    this.patientDetails.reset();
    this.router.navigateByUrl('patientscheduling');
    },err=>{
      this.notifyService.showError("Something went wrong ...!", "Error");
      this.route.navigateByUrl('patientscheduling');
    })
   }

  

   public CalculateAge(date:any): void
     {
       debugger
         if(date){
            this.timeDiff = Math.abs(Date.now() - date);
            this.age = (Math.floor((this.timeDiff / (1000 * 3600 * 24))/365)).toString();
        }
        // this.setDOBFormat=date.toLocaleString();
    }
  
    toggleSideBar() {
      this.toggleSideBarForMe.emit();
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
    sideBarOpen = true;
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }

}
