import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchedulingService } from 'src/app/scheduling.service';

@Component({
  selector: 'app-addnurseappointment',
  templateUrl: './addnurseappointment.component.html',
  styleUrls: ['./addnurseappointment.component.css']
})
export class AddnurseappointmentComponent implements OnInit {

  Meetingtitle:string="";
  mySelect : any;
  mySelect1 : any;
 public createAppointment!: FormGroup;
 
  constructor(private formBuilder:FormBuilder, private router:Router,private service:SchedulingService) { 
   
  }
  
  ngOnInit(): void {
    this.createAppointment=this.formBuilder.group({
      Meetingtitle:['',Validators.required],
      patientId:['',Validators.required],
      descriptiveInformation:['',Validators.required],
      physicianId:['',Validators.required],
      dateOfAppointment:['',Validators.required],
      timeOfAppointment:['',Validators.required]
 
    })
    this.service.GetPhysicianUsers().subscribe(
      (data: any[]) => {
        debugger
        this.phyasiciandata = data;
      
      })

      this.service.GetPatientUsers().subscribe(
        (data: any[]) => {
          debugger
          this.patientdata = data;
        
        })
  }
 
  phyasiciandata:any[]=[]
  patientdata:any[]=[]


  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm"
  ]

// Physician=[
//     "Umang",
//     "Amar",
//     "Anil",
//     "Ashok"
//   ]
  
//   Patient=[
//     "Manisha",
//     "Ajit",
//     "Aman"
//   ]

  RedirectToNurseScheduling(){
    this.router.navigateByUrl('nursescheduling');
  }

 public AddNurseAppointment(){
    debugger;
    this.service.AddAppointment(this.createAppointment.value).subscribe(res =>{
    alert("Patient Appointment Added successfully...!")
    this.createAppointment.reset();
    this.router.navigateByUrl('nursescheduling');
    //this.router.navigateByUrl('patientscheduling');
    },err=>{
     alert("Somthing went wrong...!")
    })
   }

   public backtodashboard(){

   }
}
