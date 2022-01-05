import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-diagnosismaster',
  templateUrl: './diagnosismaster.component.html',
  styleUrls: ['./diagnosismaster.component.css']
})
export class DiagnosismasterComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  masterDignosisForm !:FormGroup;
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";

  constructor(private formBuilder : FormBuilder , private router:Router ,private service:PatientvisitService) { 
    this.masterDignosisForm = this.formBuilder.group({
     
      diagnosisCode: ['',Validators.required],
      diagnosisDescription: ['',Validators.required],
      diagnosisIsDepricated: ['',Validators.required],
    })
  }
  ngOnInit(): void {
  }

  get f() {

    return this.masterDignosisForm?.controls;

  }
  addMasterDignosis(){
    debugger;

    this.service.AddMasterDignosis(this.masterDignosisForm.value).subscribe(res =>{
      
    alert("Diagnosis details added successfully...!")
    this.masterDignosisForm.reset();
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
    },err=>{
     alert("Somthing went wrong...!")
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
