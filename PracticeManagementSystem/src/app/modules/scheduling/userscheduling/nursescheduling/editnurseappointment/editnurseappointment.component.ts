import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editnurseappointment',
  templateUrl: './editnurseappointment.component.html',
  styleUrls: ['./editnurseappointment.component.css']
})
export class EditnurseappointmentComponent implements OnInit {

  mySelect : any
  mySelect1 : any
  editnurseAppointment!: FormGroup;
  
  //editAppoinment!: FormGroup;
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
