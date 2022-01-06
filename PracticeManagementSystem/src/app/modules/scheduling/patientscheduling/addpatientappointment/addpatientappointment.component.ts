import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { SchedulingService } from 'src/app/scheduling.service';


@Component({
  selector: 'app-addpatientappointment',
  templateUrl: './addpatientappointment.component.html',
  styleUrls: ['./addpatientappointment.component.css']
})
export class AddpatientappointmentComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
//Nurse Logic
list : any[] = []
mySelect : any 
mySelect1 : any
createAppointment!: FormGroup;
phyasiciandata:any[]=[]

localUser:any="";
  currentUser:any="";
  currentUserId:any="";

constructor(private router:Router,private notifyService : NotificationService, private formBuilder:FormBuilder,private service:SchedulingService) { }

  ngOnInit(): void {

    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;

    this.createAppointment = this.formBuilder.group({
      physicianId:['',Validators.required],
      meetingTitle:['',Validators.required],
      dateOfAppointment:['',Validators.required],
      timeOfAppointment:['',Validators.required],
      createdBy:[''],
      patientId:['']
    });

    this.service.GetPhysicianUsers().subscribe(
      (data: any[]) => {
        debugger
        this.phyasiciandata = data;
      
      })

  }

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    "1:00 pm - 2:00 pm",
    "2:00 pm - 3:00 pm",
  ]
  
  physicianName=[
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
  get f() {
    return this.createAppointment?.controls;
  }

  

 public createPatientAppointment()
  {
    this.f.createdBy.setValue(this.currentUserId);
    this.f.patientId.setValue(this.currentUserId);
    debugger;
    this.service.AddAppointment(this.createAppointment.value).subscribe(res =>{
    // alert("Patient Appointment Added successfully...!")
    this.notifyService.showSuccess("Patient Appointment Added successfully...!", "Success");
    this.createAppointment.reset();
    this.router.navigateByUrl('patientscheduling');
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
