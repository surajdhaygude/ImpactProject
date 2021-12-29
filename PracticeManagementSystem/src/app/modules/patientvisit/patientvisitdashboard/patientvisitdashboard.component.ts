import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-patientvisitdashboard',
  templateUrl: './patientvisitdashboard.component.html',
  styleUrls: ['./patientvisitdashboard.component.css']
})
export class PatientvisitdashboardComponent implements OnInit {

  constructor(private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }
  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }
}
