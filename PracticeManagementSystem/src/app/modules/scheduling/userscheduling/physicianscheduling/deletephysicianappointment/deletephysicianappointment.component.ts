import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletephysicianappointment',
  templateUrl: './deletephysicianappointment.component.html',
  styleUrls: ['./deletephysicianappointment.component.css']
})
export class DeletephysicianappointmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ]

  Cancel(){
    this.router.navigateByUrl('physicianscheduling')
  }

}
