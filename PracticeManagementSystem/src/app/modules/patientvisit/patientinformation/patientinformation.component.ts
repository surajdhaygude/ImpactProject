import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientinformationService } from 'src/app/patientinformation.service';

@Component({
  selector: 'app-patientinformation',
  templateUrl: './patientinformation.component.html',
  styleUrls: ['./patientinformation.component.css']
})
export class PatientinformationComponent implements OnInit {
  patientDetails: any;
  EmerencyInfo: any;
  isReadonly = true;
  allPatientDemoInfo:any[]=[];
  BreakException: any;
  testgender:any="Male";

  constructor(private formBuilder : FormBuilder, private router : Router,private service:PatientinformationService) { }

  ngOnInit(): void {
    
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

 this.service.getAllPatientDemoInfos().subscribe(data=>
  {
    this.allPatientDemoInfo=data;
  },
  (error) => {
    console.log('error', error);
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
          this.router.navigateByUrl('nursescheduling');
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

// edituser():void{
//   this.router.navigate(['/editpatientinformation']);
// }
}
