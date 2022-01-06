import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patientusermanagement',
  templateUrl: './patientusermanagement.component.html',
  styleUrls: ['./patientusermanagement.component.css']
})
export class PatientusermanagementComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private patientservice:PatientService, private route:Router,private service:AuthservicesService) { }
  firstname:any;
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
      if(this.firstname== ""){
        this.ngOnInit()
      }else{
        this.PatientData=this.PatientData.filter(res =>{
          return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
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

    //  DispayPatientGrid():void{
    //   this.route.navigateByUrl('patientusermanagement');
    //  }

     deleteuser(id:number){

      if(confirm('Are you want to delete patient record?')){
        this.patientservice.Husersdelete(id).subscribe(res =>{this.patientservice.getPatientList().subscribe(data =>{
          this.PatientData=data;
        });
      });
        
      }
    }
    edituser(id:number){
      this.route.navigate(['/editPatient', id]);
    }
    getCurrentStatus(){
      
    }
 
    SignOut(){
      this.service.logout();
     this.route.navigateByUrl('');
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
