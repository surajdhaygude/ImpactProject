import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-patientdetailsdashboard',
  templateUrl: './patientdetailsdashboard.component.html',
  styleUrls: ['./patientdetailsdashboard.component.css']
})
export class PatientdetailsdashboardComponent implements OnInit {

  constructor(private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }
  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }
}
