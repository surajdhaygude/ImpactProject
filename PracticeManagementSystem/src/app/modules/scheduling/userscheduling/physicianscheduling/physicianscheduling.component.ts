import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { SchedulingService } from 'src/app/scheduling.service';

@Component({
  selector: 'app-physicianscheduling',
  templateUrl: './physicianscheduling.component.html',
  styleUrls: ['./physicianscheduling.component.css']
})
export class PhysicianschedulingComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

    calenderData:any[]=[]
    d:any="";
    p:number=1;
    localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  constructor(private router:Router,private service:SchedulingService) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
     this.service.GetPhysicianAppointmentDetails(this.currentUserId).subscribe(
        data=> {
         debugger
          this.calenderData = data;
       

        
          // this.Id=data.createdBy;
          // this.Subject=data.meetingTitle;
          // this.StartTime=new Date(data.dateOfAppointment);
          // this.EndTime=data.timeOfAppointment;
          
          //convertdate(this.StartTime,this.EndTime);
        })
  }
//   public eventSettings: EventSettingsModel = {
//     dataSource: [
//     {
//         Id: 1,
//         Subject: 'Explosion of Betelgeuse Star',
//         StartTime: new Date(2021, 12, 15, 9, 30),
//         EndTime: new Date(2021, 12, 15, 11, 0)
//     }, {
//         Id: 2,
//         Subject: 'Thule Air Crash Report',
//         StartTime: new Date(2021, 12, 12, 12, 0),
//         EndTime: new Date(2021, 12, 12, 14, 0)
//     }, {
//         Id: 3,
//         Subject: 'Blue Moon Eclipse',
//         StartTime: new Date(2021, 12 ,13, 9, 30),
//         EndTime: new Date(2021, 12, 13, 11, 0)
//     }, {
//         Id: 4,
//         Subject: 'Meteor Showers in 2018',
//         StartTime: new Date(2021, 12, 14, 13, 0),
//         EndTime: new Date(2021, 12, 14, 14, 30)
//     }]
// };
 

// public selectedDate: Date = new Date(2021, 12, 18);
// public currentView: View = 'Month';

backtoDashbors(){
    this.router.navigateByUrl('patientdashboard')
}

Editappointment(){
    this.router.navigateByUrl('editphysicianappointment')
}
Deleteappointment(){
    this.router.navigateByUrl('deletephysicianappointment')
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
