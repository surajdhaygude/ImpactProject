import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { SchedulingService } from 'src/app/scheduling.service';


@Component({
  selector: 'app-deletenurseappointment',
  templateUrl: './deletenurseappointment.component.html',
  styleUrls: ['./deletenurseappointment.component.css']
})
export class DeletenurseappointmentComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  public DeleteAppointment!:FormGroup;

  constructor(private formBuilder:FormBuilder,private notifyService : NotificationService, private router:Router,private service:SchedulingService) { }

  ngOnInit(): void {
    this.DeleteAppointment=this.formBuilder.group({
       timeOfAppointment:['',Validators.required]
     })

     this.service.GetAllScheduling().subscribe(
      (data: any[]) => {
        debugger
        this.patientdata = data;
      })

      
  }
  patientdata:any[]=[]

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm" 
  ]

  RedirectToNurseScheduling(){
    this.router.navigateByUrl('nursescheduling');
  }
  getschedulingid:number=0;
  onBookChange(ob:any) {

    console.log('Book changed...');
    this.getschedulingid = ob.value;
    //console.log(getschedulingid);
  }


   DeleteNurseAppointment(){
   debugger;
    this.service.DeleteAppointment(this.getschedulingid).subscribe(res =>{
    // alert("Patient Appointment Deleted successfully...!")
    this.notifyService.showSuccess("Patient Appointment Deleted successfully...!", "Success");
   this.DeleteAppointment.reset();
   this.router.navigateByUrl('nursescheduling');
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

