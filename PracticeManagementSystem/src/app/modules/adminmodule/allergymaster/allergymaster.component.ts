import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-allergymaster',
  templateUrl: './allergymaster.component.html',
  styleUrls: ['./allergymaster.component.css']
})
export class AllergymasterComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  masterAllergyForm !:FormGroup;
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";

  constructor(private formBuilder : FormBuilder ,private notifyService : NotificationService, private router:Router ,private service:PatientvisitService) { 
    this.masterAllergyForm = this.formBuilder.group({
     
      allergyId: ['',Validators.required],
      allergyType: ['',Validators.required],
      allergyName: ['',Validators.required],
      clinicalInfo: ['',Validators.required],
    })
  }
  ngOnInit(): void {
  }

  get f() {

    return this.masterAllergyForm?.controls;

  }
  addMasterAllergyData(){
    debugger;

    this.service.AddMasterAllergy(this.masterAllergyForm.value).subscribe(res =>{
      
    // alert("Allergy details added successfully...!")
    this.notifyService.showSuccess("Allergy details added successfully...!", "Success");
    this.masterAllergyForm.reset();
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
    //  alert("Somthing went wrong...!")
    this.notifyService.showError("Something went wrong  ...!", "Error");
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
