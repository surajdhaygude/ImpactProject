import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deletenurseappointment',
  templateUrl: './deletenurseappointment.component.html',
  styleUrls: ['./deletenurseappointment.component.css']
})
export class DeletenurseappointmentComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ]

  RedirectToNurseScheduling(){
    this.router.navigateByUrl('nursescheduling');
  }
}
