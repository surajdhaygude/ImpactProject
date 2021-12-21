import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addpatientappointment',
  templateUrl: './addpatientappointment.component.html',
  styleUrls: ['./addpatientappointment.component.css']
})
export class AddpatientappointmentComponent implements OnInit {
//Nurse Logic
list : any[] = []
mySelect : any 
mySelect1 : any
createAppointment!: FormGroup;

constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAppointment = this.formBuilder.group({
      physicianname:['',Validators.required],
      mettingdesc:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required]
    });
  }

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    "1:00 pm - 2:00 pm",
    "2:00 pm - 3:00 pm",
  ]
  
  physicanname=[
    "Dr Arvinder Singh Soin",
    "Dr Puneet Girdhar",
    "Dr Rita Bakshi",
    "Dr Amit Agarwal",
    "Dr Ajay Kaul",
    "Dr Sanjay Gogio"
  
  ]

  backtodashboard(){
    this.router.navigateByUrl('patientscheduling')
  }

}
