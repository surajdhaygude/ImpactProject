import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-patientdashbord',
  templateUrl: './patientdashbord.component.html',
  styleUrls: ['./patientdashbord.component.css']
})
export class PatientdashbordComponent implements OnInit {
  patientpath="https://www.nestsoft.com/images/services/hospital-management-software1s.jpg";

  constructor(private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }
 
  backtoLogin(){
   this.route.navigateByUrl('');
  }

  demographicpage(){
    this.route.navigateByUrl('demographicinformation');
  }

  backscheduling(){
    this.route.navigateByUrl('patientscheduling');
  }

  Allergy(){
    this.route.navigateByUrl('allergyinformation');
  }

  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }
}
