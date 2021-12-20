import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdashbord',
  templateUrl: './patientdashbord.component.html',
  styleUrls: ['./patientdashbord.component.css']
})
export class PatientdashbordComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 
  backtoLogin(){
   this.route.navigateByUrl('');
  }
}
