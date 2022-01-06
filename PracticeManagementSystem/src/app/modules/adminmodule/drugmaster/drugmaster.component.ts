import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-drugmaster',
  templateUrl: './drugmaster.component.html',
  styleUrls: ['./drugmaster.component.css']
})
export class DrugmasterComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
 masterDrugForm !:FormGroup;
  medicationList : any = [];
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";

  constructor(private formBuilder : FormBuilder ,private notifyService : NotificationService, private router:Router ,private service:PatientvisitService) { 
    this.masterDrugForm = this.formBuilder.group({
      drugId: ['',Validators.required],
      drugName: ['',Validators.required],
      drugGenericName: ['',Validators.required],
      drugBrandName: ['',Validators.required],
      drugForm: ['',Validators.required],
      drugStrength: ['',Validators.required],
      
     
    })
  }
  ngOnInit(): void {
  }

  get f() {

    return this.masterDrugForm?.controls;

  }
  addMasterDrug(){
    debugger;
    this.service.AddMasterDrug(this.masterDrugForm.value).subscribe(res =>{
      
    // alert("Drug details added successfully...!")
    this.notifyService.showSuccess("Drug details added successfully...!", "Success");
    this.masterDrugForm.reset();
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
