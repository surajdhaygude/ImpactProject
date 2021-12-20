import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patientusermanagement',
  templateUrl: './patientusermanagement.component.html',
  styleUrls: ['./patientusermanagement.component.css']
})
export class PatientusermanagementComponent implements OnInit {

  
  constructor(private patientservice:PatientService, private route:Router) { }
  PatientName:any;
  p:number=1;
  Managelist:any[]=["Active","Deactivate","Block"]
 
 
  
  ngOnInit(): void {
    this.GetAllPatientsList();
  }

  PatientData:any[]=[];
  GetAllPatientsList() {
    this.patientservice.getPatientList().subscribe((data: any[]) => {
      console.log(data);
      this.PatientData=data;
    })
    }


    search(){
      if(this.PatientName== ""){
        this.ngOnInit()
      }else{
        this.PatientData=this.PatientData.filter(res =>{
          return res.PatientName.toLocaleLowerCase().match(this.PatientName.toLocaleLowerCase());
        })
      }
  
    }
    key: string ='PatientId';
    reverse:boolean=false;
    sort(key: string){
      this.key=key;
      this.reverse=!this.reverse;
    }

    Addpatientrecord():void{
      this.route.navigateByUrl('addpatient');
     }

     DispayPatientGrid():void{
      this.route.navigateByUrl('hospitalusermanagement');
     }

     deleteuser(id:number){
      if(confirm('Are you sure to delete patient record?')){
        this.patientservice.Husersdelete(id).subscribe(res =>{});
        this.patientservice.getPatientList().subscribe(data =>{
          this.PatientData=data;
        });
      }
    }
    edituser(id:number){
      this.route.navigate(['/editPatient', id]);
    }
    getCurrentStatus(){
      
    }
 

}
