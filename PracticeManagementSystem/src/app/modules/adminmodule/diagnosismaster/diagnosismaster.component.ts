import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
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

  constructor(private formBuilder : FormBuilder ,private notifyService : NotificationService, private router:Router ,private service:PatientvisitService) { 
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
      
    // alert("Diagnosis details added successfully...!")
    this.notifyService.showSuccess("Diagnosis details added successfully...!", "Success");
    this.masterDignosisForm.reset();
    this.router.navigateByUrl("hospitalusermanagement")
  
    },err=>{
    
     this.notifyService.showError("Something went wrong  ...!", "Error");
    })
  }
  Cancel(){
    this.router.navigateByUrl("hospitalusermanagement")
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
