import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private fb:FormBuilder , private router:Router,private service:PatientvisitService){
    this.vitalsigndetails = this.fb.group({
      patientId:['',Validators.required],
      physicianId:['',Validators.required],
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
    this.currentroleId=this.currentUser.roleId
    debugger
    this.service.GetPatientUsers().subscribe(
      (data: any[]) => {
    debugger

        this.patientdata = data;
      })
      this.service.GetPhyasicanUsers().subscribe(
        (data: any[]) => {
      debugger
          this.phyasiciandata = data;
        })
  }
  get f() {

    return this.vitalsigndetails?.controls;

  }
  addVitalSign(){

    debugger;
 
    this.f.createdBy.setValue(this.currentUserId);
    this.service.AddPatientVitalSign(this.vitalsigndetails.value).subscribe(res =>{
    alert("Patient Vital sign details added successfully...!")
    this.vitalsigndetails.reset();
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
    },err=>{
   
     alert("Patient Vital sign details added successfully...!")
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
    })

  }
  Cancel(){
     
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
