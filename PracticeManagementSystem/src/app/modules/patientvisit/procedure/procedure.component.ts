import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  proceduredetails !: FormGroup;
  procedureList : any= [];
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  constructor(private fb:FormBuilder , private router:Router,private service:PatientvisitService) {
    this.proceduredetails = this.fb.group({
      patientId:['',Validators.required],
      physicianId:['',Validators.required],
      createdBy:[''],
      procedureCode: ['',Validators.required],
      procedureDescription: ['',Validators.required],
      procedureIsDepricated: ['',Validators.required],
    })
   }
   patientdata:any[]=[];
   phyasiciandata:any[]=[];
   proceduremasterdata:any[]=[]

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
    this.service.GetProcedureData().subscribe(
      (data: any[]) =>{
        debugger
        this.proceduremasterdata=data
      })
  }
  procedureCodeDdl:any="";
  showProcedureCode:any="";
  showProcedureDescription:any="";
  BreakException:any = {};
  showOtherFieldsOnProcedureCode():void{ 
    try{
          debugger;
          this.proceduremasterdata.forEach(record=>{
          if(this.procedureCodeDdl==record.procedureCode)
          { this.showProcedureCode=record.procedureCode;
            this.showProcedureDescription=record.procedureDescription;
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

    return this.proceduredetails?.controls;

  }

  addProcedure(){
    debugger;
 
    this.f.createdBy.setValue(this.currentUserId);
    this.f.procedureCode.setValue(this.showProcedureCode);
    this.f.procedureDescription.setValue(this.showProcedureDescription);
    
    this.service.AddPatientProcedure(this.proceduredetails.value).subscribe(res =>{
      console.log(this.procedureList)
    alert("Patient Procedure details added successfully...!")
    this.proceduredetails.reset();
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
