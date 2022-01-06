import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-vitalsigns',
  templateUrl: './vitalsigns.component.html',
  styleUrls: ['./vitalsigns.component.css']
})
export class VitalsignsComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  vitalsigndetails !: FormGroup;
  vitalSignByUserId:any[]=[];
  p:number=1;
  patientUser:any="";
  localPatientUser:any="";

  constructor(private fb:FormBuilder ,private notifyService : NotificationService, private router:Router,private service:PatientvisitService){
    this.vitalsigndetails = this.fb.group({
      patientId:[''],
     // physicianId:['',Validators.required],
      createdBy:[''],
      height: ['',Validators.required],
      weight: ['',Validators.required],
      bloodPressure: ['',Validators.required],
      bodyTemperature: ['',Validators.required],
      respirationRate: ['',Validators.required],
     
  })
}
patientdata:any[]=[];
phyasiciandata:any[]=[];
  ngOnInit(): void {

    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    this.currentroleId=this.currentUser.roleId;

    this.localPatientUser=localStorage.getItem('patientUser');
          this.patientUser=JSON.parse(this.localPatientUser);

    debugger
    // this.service.GetPatientUsers().subscribe(
    //   (data: any[]) => {
    // debugger

    //     this.patientdata = data;
    //   })
    //   this.service.GetPhyasicanUsers().subscribe(
    //     (data: any[]) => {
    //   debugger
    //       this.phyasiciandata = data;
    //     })

        this.service.GetVitalSignsByUserId(this.patientUser).subscribe(
          (data:any[])=>{
            debugger
            this.vitalSignByUserId=data;
          }
        )
  }
  get f() {

    return this.vitalsigndetails?.controls;

  }
  addVitalSign(){

    debugger;
 
    this.f.patientId.setValue(this.patientUser);
    this.f.createdBy.setValue(this.currentUserId);
    this.service.AddPatientVitalSign(this.vitalsigndetails.value).subscribe(res =>{
    // alert("Patient Vital sign details added successfully...!")
    this.notifyService.showSuccess("Patient Vital sign details added successfully...!", "Success");
    this.vitalsigndetails.reset();
  //   if(this.currentroleId==2)
  // {
  //   this.router.navigateByUrl("physicianscheduling")
  // }
  // else if(this.currentroleId==3)
  // {
  //   this.router.navigateByUrl("nursescheduling")
  // }
  // else
  // {
  //   this.router.navigateByUrl("patientscheduling")
  // }
  
  this.service.GetVitalSignsByUserId(this.patientUser).subscribe(
    (data:any[])=>{
      debugger
      this.vitalSignByUserId=data;
    }
  )

    },err=>{
   
    //  alert("Patient Vital sign details added successfully...!")
    this.notifyService.showError("Something went wrong ...!", "Error");

    //  if(this.currentroleId==2)
    //  {
    //    this.router.navigateByUrl("physicianvisitdashboard")
    //  }
    //  else if(this.currentroleId==3)
    //  {
    //    this.router.navigateByUrl("visitdashboard")
    //  }
    //  else
    //  {
    //    this.router.navigateByUrl("patientscheduling")
    //  }
    })

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

   patientinfoform(){
    this.router.navigate(['/patientinformation', this.patientUser]);
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
