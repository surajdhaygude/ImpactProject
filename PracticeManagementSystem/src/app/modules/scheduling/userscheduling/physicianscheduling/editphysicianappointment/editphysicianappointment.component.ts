import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editphysicianappointment',
  templateUrl: './editphysicianappointment.component.html',
  styleUrls: ['./editphysicianappointment.component.css']
})
export class EditphysicianappointmentComponent implements OnInit {
  list : any[] = []
  mySelect : any
  mySelect1 : any
  editAppoinment!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ];

}
