import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientvisitService } from 'src/app/patientvisit.service';

@Component({
  selector: 'app-patientvisithistory',
  templateUrl: './patientvisithistory.component.html',
  styleUrls: ['./patientvisithistory.component.css']
})
export class PatientvisithistoryComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  diagnosisByUserId:any[]=[];
  p:number=1;
  medicationByUserId: any[]=[];
  procedureByUserId: any[]=[];
  vitalSignByUserId:any[]=[];

  constructor(private service:PatientvisitService) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
          this.currentUser=JSON.parse(this.localUser);
          this.currentUserId=this.currentUser.userId;

          this.service.GetDiagnosisByUserId(this.currentUserId).subscribe(
            (data:any[])=>{
              debugger
              this.diagnosisByUserId=data;
            }
          )

          this.service.GetDrugsByUserId(this.currentUserId).subscribe(
            (data:any[])=>{
              debugger
              this.medicationByUserId=data;
            }
          )

          this.service.GetProceduresByUserId(this.currentUserId).subscribe(
            (data:any[])=>{
              debugger
              this.procedureByUserId=data;
            }
          )

          this.service.GetVitalSignsByUserId(this.currentUserId).subscribe(
            (data:any[])=>{
              debugger
              this.vitalSignByUserId=data;
            }
          )
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
