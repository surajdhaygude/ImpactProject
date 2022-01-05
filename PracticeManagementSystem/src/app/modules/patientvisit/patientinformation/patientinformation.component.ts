import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientinformationService } from 'src/app/patientinformation.service';

@Component({
  selector: 'app-patientinformation',
  templateUrl: './patientinformation.component.html',
  styleUrls: ['./patientinformation.component.css']
})
export class PatientinformationComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  patientDetails: any;
  EmerencyInfo: any;
  isReadonly = true;
  allPatientDemoInfo:any[]=[];
  BreakException: any;
  testgender:any="Male";
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";

  constructor(private formBuilder : FormBuilder,private route: ActivatedRoute,private router : Router,private service:PatientinformationService) { }

  ngOnInit(): void {
    debugger

    this.service.getAllPatientDemoInfos().subscribe(
      data=> {
       debugger
        this.allPatientDemoInfo = data;
        console.log(this.allPatientDemoInfo);
        this.showOtherFieldsOnUserId();

    });
    
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    this.currentroleId=this.currentUser.roleId
  
    
 this.patientDetails = this.formBuilder.group({
  userId :['',Validators.required], 
  fname :['' ,Validators.required],
  lname :['',Validators.required],
  dob :['',Validators.required],
  age :['',Validators.required],
  gender:['',Validators.required],
  race:['',Validators.required],
  ethinicity:['',Validators.required],
  languagesKnown :['',Validators.required],
  email :['',Validators.required],
  homeAddress :['',Validators.required],
  contactNumber :['',Validators.required],
  title :['',Validators.required],
  emergencyFname :['',Validators.minLength(2)],
  emergencyLname :['',[Validators.minLength , Validators.minLength(2)]],
  relationship: ['',Validators.required],
  emergencyEmail: ['',Validators.required],
  emergencyMobileNo: ['',Validators.required],
  emergencyAddress: ['',Validators.required],
  typeofAllergies:[''],
  portalaccess:[''],
  createdDate:['']
 });

//  this.service.getAllPatientDemoInfos().subscribe(data=>
//   {
//     this.allPatientDemoInfo=data;
//   },
//   (error) => {
//     console.log('error', error);
//   });

  this.route.params.subscribe(params => {
    this.userIdDdl = params['id']

  });

//  this.EmerencyInfo = this.formBuilder.group({
//   patientid :[''],
//   // emergencyFname :['',Validators.minLength(2)],
//   // emergencyLname :['',Validators.minLength , Validators.minLength(2)],
//   // relationship: ['',Validators.required],
//   // emergencyEmail: ['',Validators.required],
//   // EmergencyMobileNo: ['',Validators.required],
//   // emergencyAddress: ['',Validators.required],
//   title :['',Validators.required]
// })
  }

  userIdDdl!:any;
  showtitle:any;
  showfname:any;
  showlname:any;
  showdob:any;
  showage:any;
  showrace:any;
  showethinicity:any;
  showlanguagesKnown:any;
  showemail:any;
  showgender:any;
  showhomeAddress:any;
  showcontactNumber:any;
  showemergencyFname:any;
  showemergencyLname:any;
  showrelationship:any;
  showemergencyEmail:any;
  showemergencyMobileNo:any;
  showemergencyAddress:any;
  showtypeofAllergies:any;
  showportalaccess:any;

  showOtherFieldsOnUserId():void{ 
    try{
      debugger
          this.allPatientDemoInfo.forEach(record=>{
          if(this.userIdDdl==record.userId)
          {
            this.showtitle=record.title;
            this.showfname=record.fname;
            this.showlname=record.lname;
            this.showdob=record.dob;
            this.showage=record.age;
            this.showrace=record.race;
            this.showethinicity=record.ethinicity;
            this.showlanguagesKnown=record.languagesKnown;
            this.showemail=record.email;
            this.showgender=record.gender;
            this.showhomeAddress=record.homeAddress;
            this.showcontactNumber=record.contactNumber;
            this.showemergencyFname=record.emergencyFname;
            this.showemergencyLname=record.emergencyLname;
            this.showrelationship=record.relationship;
            this.showemergencyEmail=record.emergencyEmail;
            this.showemergencyMobileNo=record.emergencyMobileNo;
            this.showemergencyAddress=record.emergencyAddress;
           this.showtypeofAllergies=record.typeofAllergies;
           this.showportalaccess=record.portalaccess;
           throw this.BreakException;
          }
      });
    }
    catch(e)
    {
      console.log(e);
    }    
  }
  

  get f() {
    return this.patientDetails?.controls;
  }

  updatePatientDemoInfo():void
  {
    this.f.title.setValue(this.showtitle);
    this.f.fname.setValue(this.showfname);
    this.f.lname.setValue(this.showlname);
    this.f.age.setValue(this.showage);
    this.f.race.setValue(this.showrace);
    this.f.ethinicity.setValue(this.showethinicity);
    this.f.languagesKnown.setValue(this.showlanguagesKnown);
    this.f.email.setValue(this.showemail);
    this.f.homeAddress.setValue(this.showhomeAddress);
    this.f.contactNumber.setValue(this.showcontactNumber);
    this.f.emergencyFname.setValue(this.showemergencyFname);
    this.f.emergencyLname.setValue(this.showemergencyLname);
    this.f.emergencyEmail.setValue(this.showemergencyEmail);
    this.f.emergencyMobileNo.setValue(this.showemergencyMobileNo);
    this.f.emergencyAddress.setValue(this.showemergencyAddress);
    this.f.createdDate.setValue(new Date());

      this.service.UpdatePatientDemoInfo(this.patientDetails.value).subscribe(data=>
        {
          debugger
          alert("Patient Information Updated Successfully");
          if(this.currentroleId==2)
          {
            this.router.navigateByUrl("physicianscheduling")
          }
          else if(this.currentroleId==3)
          {
            this.router.navigateByUrl("nursescheduling")
          }
          else
          {
            this.router.navigateByUrl("patientscheduling")
          }
        },
        (error) => {
          console.log('error', error);
        });
  }

  MyProfil : any ;
  fname:any;
  lname : any;
  dob !: Date;
  gender !: string;
  email !: string;

  getMyprofile(){
 
  }
   
 updatebasicdetails(){
  
 }
 
 getPatientdetails(){
  
 }
 
 savePatient() {
 
 }

 Relation =[
  "Father",
  "Mother",
  "Other"
];

 toggleReadonly() {
  this.isReadonly = !this.isReadonly;
  
}
toggleDiable() {
  // this.isReadonly = true;
}
Cancel(){
  if(this.currentroleId==2)
  {
    this.router.navigateByUrl("physicianvisitdashboard")
  }
  else if(this.currentroleId==3)
  {
    this.router.navigateByUrl("visitdashboard")
  }
  else
  {
    this.router.navigateByUrl("patientscheduling")
  }

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

diagnosisform(){
 this.router.navigateByUrl('diagnosis');  
}

Medicationform(){
  this.router.navigateByUrl('medication');  
}

Procedureform(){
  this.router.navigateByUrl('procedure');  
}

Vitalsignsform(){
  this.router.navigateByUrl('vitalsigns');  
}
// edituser():void{
//   this.router.navigate(['/editpatientinformation']);
// }
}
