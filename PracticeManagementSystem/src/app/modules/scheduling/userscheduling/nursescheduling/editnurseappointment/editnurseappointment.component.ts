import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { SchedulingService } from 'src/app/scheduling.service';

@Component({
  selector: 'app-editnurseappointment',
  templateUrl: './editnurseappointment.component.html',
  styleUrls: ['./editnurseappointment.component.css']
})
export class EditnurseappointmentComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  mySelect : any
  mySelect1 : any
  EditAppointment!: FormGroup;
  
  
  constructor(private formBuilder:FormBuilder,private notifyService : NotificationService, private router:Router,private service:SchedulingService) { }

  ngOnInit(): void {
    this.EditAppointment=this.formBuilder.group({

     employeeId:['',Validators.required],
     patientName:['',Validators.required],
     descriptiveInformation:['',Validators.required],
      physicianName:['',Validators.required],
      dateOfAppointment:['',Validators.required],
      timeOfAppointment:['',Validators.required]
    })
  }

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ]

  Physician=[
    "Umang",
    "Amar",
    "Anil",
    "Ashok"
  ]

  Patient=[
    "Manisha",
    "Ajit",
    "Aman"
  ]

  RedirectToNurseScheduling(){
    this.router.navigateByUrl('nursescheduling');
  }

  backtodashboard(){
    
  }

 public EditNurseAppointment()
  {
    debugger;
    this.service.UpdateAppointment(this.EditAppointment.value).subscribe(res =>{
    // alert("Patient Appointment Updated successfully...!")
    this.notifyService.showSuccess("Patient Appointment Updated successfully...!", "Success");
    this.EditAppointment.reset();
    //this.router.navigateByUrl('patientscheduling');
    },err=>{
    //  alert("Somthing went wrong...!")
    this.notifyService.showError("Something went wrong  ...!", "Error");
    })
  }

  

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
