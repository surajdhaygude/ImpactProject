import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  patientmedForm !:FormGroup;
  medicationList : any = [];
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  constructor(private formBuilder : FormBuilder , private router:Router ,private service:PatientvisitService) { 
    this.patientmedForm = this.formBuilder.group({
      
      patientId:['',Validators.required],
      physicianId:['',Validators.required],
      createdby:[''],
      drugId: ['',Validators.required],
      drugName: ['',Validators.required],
      drugGenericName: ['',Validators.required],
      drugForm: ['',Validators.required],
      drugStrength: ['',Validators.required],
      
     
    })
  }
  patientdata:any[]=[];
  phyasiciandata:any[]=[];
  drugmasterdata:any[]=[]

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
    this.service.GetDrugMasterData().subscribe(
      (data: any[]) =>{
        debugger
        this.drugmasterdata=data
      })

  }
  drugIdDdl:any="";
  showDrugId:any="";
  showDrugName:any="";
  showDrugGenericName:any="";
  showDrugForm:any="";
  showDrugStrength:any="";
  BreakException:any = {};

  showOtherFieldsOnDrugId():void{ 
    try{
          debugger;
          this.drugmasterdata.forEach(record=>{
          if(this.drugIdDdl==record.drugId)
          { this.showDrugId=record.drugId;
            this.showDrugName=record.drugName;
            this.showDrugGenericName=record.drugGenericName;
            this.showDrugForm=record.drugForm;
             this.showDrugStrength=record.drugStrength
            throw this.BreakException;
          }
      });
    }
    catch(e)
    {
      console.log(e);
    }    
  }



  medication=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];
  get f() {

    return this.patientmedForm?.controls;

  }

  addMedication(){
    debugger;
 
    this.f.createdby.setValue(this.currentUserId);
    this.f.drugId.setValue(this.showDrugId);
    this.f.drugName.setValue(this.showDrugName);
    this.f.drugGenericName.setValue(this.showDrugGenericName);
    this.f.drugForm.setValue(this.showDrugForm);
    this.f.drugStrength.setValue(this.showDrugStrength);
    this.service.AddPatientMedicatio(this.patientmedForm.value).subscribe(res =>{
      console.log(this.medicationList)
    alert("Patient Medication details added successfully...!")
    this.patientmedForm.reset();
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
  

}
