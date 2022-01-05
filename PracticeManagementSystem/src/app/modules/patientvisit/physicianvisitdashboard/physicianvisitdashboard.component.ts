import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PatientinformationService } from 'src/app/patientinformation.service';

@Component({
  selector: 'app-physicianvisitdashboard',
  templateUrl: './physicianvisitdashboard.component.html',
  styleUrls: ['./physicianvisitdashboard.component.css']
})
export class PhysicianvisitdashboardComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private service:PatientinformationService,private route:Router) { }
  p:number=1;


  nuservisit:any[]=[];
  ngOnInit(): void {
    this.service.getAllPatientDemoInfos().subscribe(
      data=> {
       debugger
        this.nuservisit = data;
        console.log(this.nuservisit);
    });
  }
  firstname:any;

  search(){

    if(this.firstname== ""){

      this.ngOnInit()
    }else{
      this.nuservisit=this.nuservisit.filter(res =>{
        return res.fname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
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

  patientinfo(id:any){
    debugger
    this.route.navigate(['/patientinformation', id]);

  }

}
