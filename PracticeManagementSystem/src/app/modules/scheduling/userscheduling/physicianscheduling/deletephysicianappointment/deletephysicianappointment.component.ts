import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchedulingService } from 'src/app/scheduling.service';

@Component({
  selector: 'app-deletephysicianappointment',
  templateUrl: './deletephysicianappointment.component.html',
  styleUrls: ['./deletephysicianappointment.component.css']
})
export class DeletephysicianappointmentComponent implements OnInit {

  DeleteAppointment !:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router,private service:SchedulingService) { }
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  // ngOnInit(): void {
  //   this.DeleteAppointment=this.formBuilder.group({
  //     timeOfAppointment:['',Validators.required]
  //   })

    
  // }

  localUser:any="";

  currentUser:any="";

  currentUserId:any="";

  
  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');

          this.currentUser=JSON.parse(this.localUser);

          this.currentUserId=this.currentUser.userId;

    this.DeleteAppointment=this.formBuilder.group({
       timeOfAppointment:['',Validators.required]

     })
     this.service.GetPhysicianAppointmentDetails(this.currentUserId).subscribe(
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
    "12:00 pm - 1:00 pm",
  ]

  Cancel(){
    this.router.navigateByUrl('physicianscheduling')
  }

  getschedulingid:number=0;
  onBookChange(ob:any) {

    console.log('Book changed...');
    this.getschedulingid = ob.value;
    //console.log(getschedulingid);
  }
  public DeletePhysicianAppointment()
  {
  debugger;
    this.service.DeleteAppointment(this.getschedulingid).subscribe(res =>{
    alert("Patient Appointment Deleted successfully...!")
   this.DeleteAppointment.reset();
    
    this.router.navigateByUrl('physicianscheduling');
    },err=>{
     alert("Somthing went wrong...!")
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

