import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosisdetails!: FormGroup;
  diagnosisList : any = [];
  isdiagnosis: boolean = true;
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  patientUser:any="";
  localPatientUser:any="";
  diagnosisByUserId:any[]=[];
  p:number=1;


  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  
  constructor(private formBuilder : FormBuilder,private notifyService : NotificationService, private router:Router, private service:PatientvisitService) { 
    this.diagnosisdetails = this.formBuilder.group({
      diagnosisCode: ['',Validators.required],
      diagnosisDescription: ['',Validators.required],
      patientId:[''],
      // physicianId:['',Validators.required],
      createdby:['']
      //diagnosisIsDepricated: ['',Validators.required],
    })
  }
  patientdata:any[]=[];
  phyasiciandata:any[]=[];
  diagnosismasterdata:any[]=[];

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


        this.service.GetDiagnosisMasterData().subscribe(
          (data: any[]) =>{
            debugger
            this.diagnosismasterdata=data
          })

          this.service.GetDiagnosisByUserId(this.patientUser).subscribe(
            (data:any[])=>{
              debugger
              this.diagnosisByUserId=data;
            }
          )

  }

  key: string ='PatientDiagnosisInfoId';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }

  diagnosis=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];
  // Description=[
  //   "food",
  //   "Typhoid",
  //   "Drug",
  //   "Cholera",
  //   "Venom or Salivary",
  //   "Other",
  //  ];
  //  Code=[
  //   "A00",
  //   "B00",
  //   "C00",
  //   "D00",
  //   "E00",
  //   "F00",
  //  ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  // addDiagnosis(){
  //   this.diagnosisList=this.diagnosisdetails.value
  //   console.log(this.diagnosisList)
  //   alert("Diagnosis Added successfully...!")
  // }
  removeDiagnosis(element:any){
    this.diagnosisList.forEach((value: any, index:any)=>{
      if(value == element)
      this.diagnosisList.splice(index,1)
    });
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
  get f() {

    return this.diagnosisdetails?.controls;

  }

  diagnosisadded(){
    debugger;
    // this.f.patientid.setValue(this.patientUser);
    // this.f.physicianid.setValue(4);
    this.f.createdby.setValue(this.currentUserId);
    this.f.patientId.setValue(this.patientUser);
    this.service.Adddiagnosis(this.diagnosisdetails.value).subscribe(res =>{
      console.log(this.diagnosisList)
    // alert("Patient diagnosis details added successfully...!")
    this.notifyService.showSuccess("Patient diagnosis details added successfully...!", "Success");
    this.diagnosisdetails.reset();
    // if(this.currentroleId==2)
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

    this.service.GetDiagnosisByUserId(this.patientUser).subscribe(
      (data:any[])=>{
        debugger
        this.diagnosisByUserId=data;
      }
    )

    },err=>{
    //  alert("Somthing went wrong...!")
     this.notifyService.showError("Something went wrong  ...!", "Error");

    })
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
    debugger
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
   

}
